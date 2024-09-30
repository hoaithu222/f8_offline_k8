import { useContext } from "react";
import { AppContext } from "../../App";
import "./Categories.css";
import { toast } from "react-toastify";

export default function Categories() {
  const { cart, setCart } = useContext(AppContext);
  console.log("Giỏ hàng", cart);
  const handleClick = () => {
    toast.success("Thanh toán giỏ hàng thành công");
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="categories">
      {cart.length === 0 ? (
        <p className="content">Chưa có gì trong giỏ hàng cả!!!</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th className="name">Tên sản phẩm</th>
                <th className="quantity">Số lượng</th>
                <th>Còn lại</th>
                <th>Tổng tiền</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.count}</td>
                  <td>{item.quantity - item.count}</td>
                  <td>{item.price * item.count}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="btn-buy" onClick={handleClick}>
            Thanh toán
          </button>
        </>
      )}
    </div>
  );
}
