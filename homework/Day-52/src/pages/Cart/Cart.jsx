import { useDispatch, useSelector } from "react-redux";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import {
  add,
  clearCart,
  remove,
  decrease,
} from "../../redux-toolkit/slices/cartReducer";
import { toast } from "react-toastify";
import { CiFaceFrown } from "react-icons/ci";

export default function Cart() {
  const carts = useSelector((state) => state.cart.cartProduct);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalPrice = carts.reduce((total, item) => {
    return total + item.price * item.quantityNew;
  }, 0);

  const handleDelete = (item) => {
    toast.warning(
      <div>
        <span>Bạn có chắc chắn muốn xóa sản phẩm này không?</span>
        <button
          onClick={async () => {
            try {
              dispatch(remove(item));
              toast.success("Xóa sản phẩm thành công");
            } catch (err) {
              toast.error("Không thể xóa sản phẩm");
            }
          }}
          style={{
            marginLeft: "10px",
            backgroundColor: "red",
            color: "white",
            border: "1px solid #fff",
            padding: "5px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Click vào đây
        </button>
      </div>
    );
  };

  const handleDecrease = (item) => {
    if (item.quantityNew > 1) {
      dispatch(decrease(item));
    } else {
      handleDelete(item);
    }
  };

  return (
    <div className="cart">
      <div className="container">
        <h2 className="cart-title">SHOPPING CART</h2>
        {carts.length > 0 ? (
          <>
            <div className="cart-items">
              {carts.map((item, index) => (
                <div className="cart-item" key={`${item._id}-${index}`}>
                  <div className="item-info">
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="box">
                      <p className="item-brand">{item.brand}</p>
                      <h3 className="item-name">{item.name}</h3>
                    </div>
                    <div className="item-price">
                      $<span>{item.price.toLocaleString()}</span>
                    </div>
                    <div className="quantity-controls">
                      <button onClick={() => dispatch(add(item))}>+</button>
                      <span>{item.quantityNew}</span>
                      <button onClick={() => handleDecrease(item)}>-</button>
                    </div>
                    <div className="item-quantity">
                      Còn lại: {item.quantityProduct}
                    </div>
                    <div className="item-total-price">
                      $
                      <span>
                        {(item.price * item.quantityNew).toLocaleString()}
                      </span>
                      <FaRegTrashCan onClick={() => handleDelete(item)} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <h3>Total Price: ${totalPrice.toLocaleString()}</h3>
            </div>
            <div className="cart-footer">
              <button className="button-details" onClick={() => navigate(-1)}>
                Go home
              </button>
              <button
                onClick={() => {
                  dispatch(clearCart());
                  toast.success("Thank you!");
                }}
              >
                Checkout
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="no-cart-section">
              <p className="no-cart">There are no products in your cart!</p>
              <CiFaceFrown className="sad-icon" />
              <button className="go-home-button">
                <Link to="/">Go home</Link>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
