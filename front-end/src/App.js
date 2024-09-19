import moment from "moment";
import "moment/locale/vi";
import "./assets/app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import appStyle from "./assets/app.module.scss";
import Footer from "./components/footer";
import Header from "./components/header";
import config from "./config.json";
import image01 from "./assets/image/image1.jpg";
export default function App() {
  const createAt = "2024-10-11 20:00:00";
  console.log(config);
  return `
  <div class= "container">
   ${Header()}
  <h1 class = "${appStyle.title}">Học lập trình không khó</h1>
  <h2>${moment().format("DD/MM/YYYY    HH:mm:ss")}</h2>
  <h2>Đăng lúc : ${moment(createAt).fromNow()}</h2>
  <button class = "btn btn-primary">Đăng kí ngay</button>
  <img src="${image01}" alt = "hình ảnh"/>
  <h2>SERVER API : ${process.env.API_SERVER}</h2>
  ${Footer()}</div>
  `;
}
