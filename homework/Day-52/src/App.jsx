import "./base.css";
import Home from "./pages/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import LayoutDefault from "./layout/LayoutDefault";
import Cart from "./pages/Cart/Cart";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route index element={<Navigate to="/1" />} />
          <Route path=":page" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path=":page/details/:name/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </div>
  );
}
