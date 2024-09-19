import React from "react";
import ReactDOM from "react-dom/client";

const rootEl = document.querySelector("#root");
// const h1 = React.createElement(
//   "h1",
//   {
//     id: "title",
//     className: "title",
//     onClick: () => {
//       console.log("ok");
//     },
//   },
//   "Học React không khó",
//   React.createElement(
//     "a",
//     { href: "https://fullstatck.edu.vn" },
//     "Fullstack.edu.vn"
//   )
// );
// const h2 = React.createElement("h2", null, "Học front-end không khó");
// const arr = Array.from(Array(100).keys()).map((_, index) => {
//   return React.createElement("li", null, `Item ${index + 1}`);
// });
// const ul = React.createElement("ul", { className: "menu" }, ...arr);
// const div = React.createElement(Fragment, null, h1, ul, h2);
const title = (
  <>
    <i>Học front-end không khó</i>
    <p>ok</p>
  </>
);
const isAuth = false;
const status = true;
const users = ["item1", "item2", "item3"];
// const userJsx = users.map((item, index) => <h3 key={index}>{item}</h3>);
const getMessage = () => {
  return <h3>F8-Fullstack</h3>;
};
const Alert = () => {
  // yêu cầu viết hoa kí tự đầu
  return <h3>Hello</h3>;
};
class Product extends React.Component {
  render() {
    return <h3>Sản Phẩm</h3>;
  }
}
const div = (
  <>
    {isAuth ? <h1>Welcome</h1> : <h1>Vui lòng đăng nhập</h1>}
    <h1 className={`title ${status ? "active" : " "}`} id="title">
      Học ReactJs
    </h1>
    <h2>{title}</h2>
    {getMessage()}
    <Alert />
    <Alert></Alert>
    <Product />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
      pariatur porro nam temporibus ratione quam harum distinctio, excepturi
      inventore voluptatibus, ex minima voluptate fugiat voluptas cumque
      assumenda cupiditate. Quis earum saepe distinctio consequuntur maiores
      alias. Similique ea accusantium, deleniti doloribus adipisci delectus
      veritatis molestiae in blanditiis quas eos expedita. Temporibus quo libero
      nostrum culpa explicabo sapiente necessitatibus tenetur laudantium,
      consequatur doloribus impedit?
    </p>
    {users.map((item, index) => (
      <h3 key={index}>{item}</h3>
    ))}
  </>
);
ReactDOM.createRoot(rootEl).render(div);

// ReactDOM.createRoot(rootEl).render(div);

// bài tập : thêm đoạn mã html vào sau h1
/*
<ul className = "menu">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
có 100 thẻ li

*/
