// import Header from "./components/Header";
import Input from "./components/input";

export default function App() {
  //   const handleClick = () => {
  //     console.log("click");
  //   };
  //   const handleClick2 = (value) => {
  //     console.log(value);
  //   };
  //   const handleChangeValue = (e) => {
  //     const value = e.target.value;
  //     console.log(value);
  //   };
  //   const users = {
  //     name: "hoàng an",
  //     email: "hoangan@gmail.com",
  //   };
  const handleChangeValue = (e) => {
    const value = e.target.value;
    console.log(value);
  };
  return (
    <div>
      {/* <Header title="F8" {...users}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, rerum.
        </p>
      </Header>

      <h1>Đây là trang chủ</h1>
      <div>
        <input
          type="text"
          placeholder="Nhập tên"
          onChange={handleChangeValue}
        />
      </div>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={() => {
          handleClick2("F8");
        }}
      >
        Click me 2
      </button> */}
      <Input onChange={handleChangeValue} />
    </div>
  );
}
