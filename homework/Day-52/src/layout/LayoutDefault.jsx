import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import "./style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LayoutDefault() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          pauseOnFocusLoss
        />
      </main>
    </div>
  );
}
