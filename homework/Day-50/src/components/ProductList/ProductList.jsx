import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.css";

export default function ProductList() {
  return (
    <div className="productList">
      <h1 className="title">Welcome to Shop!</h1>
      <ProductItem />
    </div>
  );
}
