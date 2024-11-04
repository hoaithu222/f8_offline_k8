"use client";

import { v4 as uuidv4 } from 'uuid';

import { useUser } from '@auth0/nextjs-auth0/client';
import useSWR, { mutate } from 'swr';
import { useRouter } from 'next/navigation';

const fetcher = (url) => fetch(url).then((res) => {
  if (!res.ok) {
    throw new Error('Lỗi khi lấy dữ liệu');
  }
  return res.json();
});

export default function PageMindMap() {
  const { user, isLoading } = useUser();
  const route = useRouter();
  const { data: mindmaps , error } = useSWR(user ? `${process.env.SERVER_API}/mindmaps?createdBy=${user.sub}` : null, fetcher, {
    fallbackData: []
  });

  const addMindMap = async () => {
    const newMindMap = {
      id: uuidv4(),
      name: "Mindmap không có tên",
      createdBy: user.sub,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isPublic: false,
      nodes: [
        {
            id: '0',
            type: 'input',
            data: { label: 'My Mindmap' },
            position: { x: 250, y: 100 },
            style: { backgroundColor: '#8BC34A', color: '#FFF', padding: '20px', borderRadius: '8px' },
            width:"150",
            height:"40"
          },
      ],
      edges: [],
      description: "Chưa có mô tả",
    };

    const response = await fetch(`${process.env.SERVER_API}/mindmaps?createdBy=${user.sub}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMindMap),
    });


    if (response.ok) {
      const addedMindMap = await response.json();
      mutate(`${process.env.SERVER_API}/mindmaps?createdBy=${user.sub}`, [...mindmaps, addedMindMap], false);
      route.push(`/my-mindmap/${addedMindMap.id}`);
      sessionStorage.setItem("nodes", JSON.stringify([{
        id: '0',
        type: 'input',
        data: { label: 'My Mindmap' },
        position: { x: 250, y: 100 },
        style: { backgroundColor: '#8BC34A', color: '#FFF', padding: '20px', borderRadius: '8px' },
        width: "150",
        height: "40"
      }]));
      sessionStorage.setItem("edges", JSON.stringify([]));
    } else {
      console.error("Lỗi khi thêm mindmap mới");
    }
  };

  const deleteMindMap = async (id) => {
    const response = await fetch(`${process.env.SERVER_API}/mindmaps/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log("Mindmap đã được xóa");
      mutate(`${process.env.SERVER_API}/mindmaps?createdBy=${user.sub}`, mindmaps.filter(mindmap => mindmap.id !== id), false);
    } else {
      console.error("Lỗi khi xóa mindmap");
    }
  };

  if (isLoading) {
    return <div>Đang tải...</div>;
  }

  if (error) {
    return <div>Lỗi khi lấy danh sách mindmaps: {error.message}</div>;
  }

  return (
    <div className="py-12 px-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-blue-300">Mindmap của tôi</h2>
      <button
        className="px-4 py-2 border border-blue-500 text-blue-500 rounded mt-4"
        onClick={addMindMap}
      >
        Thêm mới
      </button>
      <div className="mt-6">
        <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-left text-gray-700"></th>
              <th className="px-4 py-2 border-b text-left text-gray-700">Tên</th>
              <th className="px-4 py-2 border-b text-left text-gray-700">Tạo Lúc</th>
              <th className="px-4 py-2 border-b text-left text-gray-700">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {mindmaps.map((mindmap) => (
              <tr key={mindmap.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b">
                  <input type="checkbox" />
                </td>
                <td
                  className="px-4 py-2 border-b cursor-pointer"
                  onClick={() => route.push(`/my-mindmap/${mindmap.id}`)}
                >
                  <div className="font-semibold">{mindmap.name}</div>
                  <div className="text-sm text-gray-500">{mindmap.description}</div>
                </td>
                <td
                  className="px-4 py-2 border-b cursor-pointer"
                  onClick={() => route.push(`/my-mindmap/${mindmap.id}`)}
                >
                  {new Date(mindmap.createdAt).toLocaleString()}
                </td>
                <td className="px-4 py-2 border-b">
                  <button
                    className="text-blue-500 mr-2"
                    onClick={() => route.push(`/my-mindmap/${mindmap.id}`)}
                  >
                    ✏️
                  </button>
                  <button
                    className="text-red-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteMindMap(mindmap.id);
                    }}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
