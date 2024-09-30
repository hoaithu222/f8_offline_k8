import { useContext } from "react";
import { AppContext } from "../../App";
import "./ProductItem.css";
import { toast } from "react-toastify";

export default function ProductItem() {
  const { productList, cart, setCart } = useContext(AppContext);

  const addToCart = (product) => {
    toast.success("Thêm vào giỏ hàng thành công");
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item._id === product._id);
      if (existingItem) {
        return prevCart.map((item) =>
          item._id === product._id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, count: 1 }];
      }
    });
  };
  return (
    <div className="productItem">
      {productList && productList.length > 0 ? (
        productList.map((product) => (
          <div key={product._id} className="item">
            <img src={product.image} />
            <h2 className="name">{product.name}</h2>
            <div className="box">
              <p>${product.price}</p>
              <button className="buy" onClick={() => addToCart(product)}>
                Add To Cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Không có sản phẩm</p>
      )}
    </div>
  );
}
