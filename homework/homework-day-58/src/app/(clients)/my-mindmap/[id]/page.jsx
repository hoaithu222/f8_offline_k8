"use client";
import AddNodeOnEdgeDrop from "./AddNodeOnEdgeDrop";
import { ReactFlowProvider } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import './index.css';
import useSWR, { mutate } from 'swr';
import { FaShareFromSquare } from "react-icons/fa6";
import { BiSolidSave } from "react-icons/bi";
import ShareModal from "./ShareModal";
import { useEffect, useState } from "react";
import Head from "next/head";


const fetcher = (url) => 
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Error fetching data');
      }
      return res.json();
    });

export default function App({ params }) {
  const { id } = params;
  const { data: mindmap, error, isLoading } = useSWR(
    `${process.env.SERVER_API}/mindmaps/${id}`,
    fetcher,
    { 
      fallbackData: { nodes: [], edges: [] },
      revalidateOnMount: true
    }
  );

  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (mindmap) {
      setName(mindmap.name || "");
      setDescription(mindmap.description || "");
    }
  }, [mindmap]);

  useEffect(() => {
    document.title = name;
  }, [name]);

  if (error) {
    console.error("Error fetching mindmap data:", error);
    return <div>Error loading mindmap</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const addMindMap = async () => {
    const nodes = typeof window !== 'undefined' ? JSON.parse(sessionStorage.getItem("nodes")) || [] : [];
    const edges = typeof window !== 'undefined' ? JSON.parse(sessionStorage.getItem("edges")) || [] : [];
    
    const mindmapUpdate = { nodes, edges, name, description };
    
    try {
      const response = await fetch(`${process.env.SERVER_API}/mindmaps/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mindmapUpdate),
      });

      if (response.ok) {
        const updatedMindMap = await response.json();
        console.log("Mindmap updated:", updatedMindMap);
        mutate(`${process.env.SERVER_API}/mindmaps/${id}`);
      } else {
        console.error("Update failed");
      }
    } catch (error) {
      console.error("Error updating mindmap:", error);
    }
  };

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleClickSave = () => {
    addMindMap();
  };

  return (
    <>
      <Head>
        <title>{name ? `${name} - Mindmap Flow` : "My Mindmap - Mindmap Flow"}</title>
        <meta name="description" content={description || "Khám phá và quản lý các sơ đồ tư duy của bạn trên Mindmap Flow. Tối ưu hóa quy trình tư duy của bạn ngay hôm nay."} />
        <meta name="keywords" content="Mindmap Flow, my mindmap, sơ đồ tư duy, quản lý ý tưởng, tư duy sáng tạo" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="https://img.icons8.com/?size=100&id=gCKTJ4zt0XHe&format=png&color=000000" />
      </Head>

      <ReactFlowProvider>
        <div className="app-header p-8">
          <div>
            <h1>
              <input 
                type="text" 
                name="title" 
                value={name} 
                onChange={handleChange(setName)}
                onBlur={addMindMap} 
                className="rounded-lg px-4 py-2 w-full focus:ring-0 focus:outline-none mb-2"
              />
            </h1>
            <input 
              type="text" 
              name="desc" 
              value={description} 
              onChange={handleChange(setDescription)}
              onBlur={addMindMap} 
              className="rounded-lg px-4 py-2 w-full focus:ring-0 focus:outline-none"
            />
          </div>
          <div className="action-buttons">
            <button className="save-button flex items-center" onClick={handleClickSave}>
              <BiSolidSave /> Lưu thay đổi
            </button>
            <button className="share-button flex items-center" onClick={() => setIsShareModalOpen(true)}>
              <FaShareFromSquare /> Chia sẻ
            </button>
            <ShareModal
              isOpen={isShareModalOpen}
              onClose={() => setIsShareModalOpen(false)}
              mindmapId={id}
              isPublic={mindmap.isPublic}
              onVisibilityChange={(newVisibility) => {
                mutate(`${process.env.SERVER_API}/mindmaps/${id}`);
              }}
            />
          </div>
        </div>
        {mindmap && (
          <AddNodeOnEdgeDrop 
            initialNodes={mindmap.nodes || []} 
            initialEdges={mindmap.edges || []}
          />
        )}
      </ReactFlowProvider>
    </>
  );
}
