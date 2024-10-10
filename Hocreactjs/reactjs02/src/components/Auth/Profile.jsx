import { useSelector } from "../../store/hook";

export default function Profile() {
  const user = useSelector((state) => state.user);
  const handleClick = () => {
    localStorage.removeItem("accessToken");
  };
  return (
    <div>
      <h1 className="name">Chào bạn {user.name}</h1>
      <button onClick={handleClick}>Đăng xuất</button>
    </div>
  );
}
