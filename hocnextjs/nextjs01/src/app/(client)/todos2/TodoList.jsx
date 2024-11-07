"use client";
import { useEffect, useState } from "react";
import useSWR from "swr";
import SearchForm from "./SearchForm";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

// import { useEffect, useState } from "react";
function debounce(cb, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

export default function TodoList() {
  const [id, setId] = useState();
  const [searchInput, setSearchInput] = useState("");
  const { data, isLoading, error } = useSWR(
    `${process.env.API_SERVER}/todos?q=${searchInput}`,
    fetcher,
    {
      fallbackData: [],
    }
  );
  console.log(data, isLoading, error);
  if (error) {
    return <h3>Đã có lỗi xảy ra</h3>;
  }
  //   const [todoList, setTodoList] = useState([]);
  //   const getTodoList = async () => {
  //     const response = await fetch(`${process.env.API_SERVER}/todos`);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setTodoList(data);
  //     }
  //   };
  //   useEffect(() => {
  //     getTodoList();
  //   }, []);

  // const { data: search } = useSWR(
  //   searchInput && `${process.env.API_SERVER}/todos?q=${searchInput}`,
  //   fetcher
  // );

  const { data: detail } = useSWR(
    id && `${process.env.API_SERVER}/todoDetails/${id}`,
    fetcher
  );
  const handleClick = (id) => {
    setId(id);
  };
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChangeInput = debounce((e) => {
    setSearchInput(e.target.value);
    router.push(`${pathname}?q=${encodeURIComponent(e.target.value)}`);
  }, 500);
  useEffect(() => {
    const q = searchParams.get("q");

    if (q) {
      setSearchInput(q);
    }
  }, []);
  return (
    <div>
      <SearchForm onChange={handleChangeInput} />
      <ul>
        {isLoading
          ? "Loading..."
          : data?.map((item) => (
              <li key={item.id}>
                {item.title}
                <button
                  onClick={() => {
                    handleClick(item.id);
                  }}
                >
                  More
                </button>
                {detail?.id === item.id && detail?.content}
              </li>
            ))}
      </ul>
    </div>
  );
}
