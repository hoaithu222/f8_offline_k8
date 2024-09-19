import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState("");
  const [isLoading, setLoading] = useState(true);
  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
    console.log(data);
    setLoading(false);
  };
  const handleLoadPosts = () => {
    getPosts();
  };
  const handleChangeValue = (e) => {
    setName(e.target.value);
  };
  // Công việc 1
  // Công việc 2
  // Công việc 3
  // ===> Side Effect
  //   console.log("re-render");
  // quá trình ngoài lề mất quá nhiều thời gian thì ==>sử dụng useEffect
  useEffect(() => {
    getPosts();
  }, []);
  useEffect(() => {
    document.title = name;
    console.log("effect", name);
    return () => {
      //cleanup ---> lấy dữ liệu của lần re-der trước --> xóa dữ liệu cũ
      console.log("cleanup", name);
    };
  }, [name]);
  /*
useEffect(callback,dependencies?)
- callback là các hàm để thực thi các side effect 
- dependencies là điều kiện để callback thực thi 
+ null||undefined ==> Component re-render callback sẽ chạy
+ [] ===> Component render lần đầu tiên thì callback sẽ chạy 
+ [bien1,bien2,bien3,...] ==> khi nào 1 trong các biến thay đổi  thì callback sẽ chạy

*/
  return (
    <div>
      {console.log("Update ui")}

      <h1>Posts</h1>
      {console.log({ name })}
      <div>
        <input
          type="text"
          name="name"
          placeholder="Họ tên"
          onChange={handleChangeValue}
        />
        {"  "}
        {name}
      </div>
      <button onClick={handleLoadPosts}>Load Posts</button>
      {isLoading ? (
        <h3>Loading....</h3>
      ) : (
        posts.map(({ title, id }) => <p key={id}>{title}</p>)
      )}
    </div>
  );
}
