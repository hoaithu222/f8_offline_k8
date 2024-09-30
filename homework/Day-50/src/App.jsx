import { createContext, useEffect, useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";
import LoadingSpinner from "./components/Loading/LoadingSpinner";
import Catetories from "./components/Catetories/Catetories";
import { toast, ToastContainer } from "react-toastify";
import { notifyError, notifySuccess } from "./utils/notifications";
import "react-toastify/dist/ReactToastify.css";

export const AppContext = createContext();

function App() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState(localStorage.getItem("apiKey") || "");
  const [email, setEmail] = useState(localStorage.getItem("userEmail") || "");
  const [isApiKeyFetched, setIsApiKeyFetched] = useState(!!apiKey);
  const [userName, setUserName] = useState("");
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const getProduct = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://api-exercise-sopi.vercel.app/api/v1/products?limit=8"
      );
      const result = await response.json();
      setProductList(result.data.listProduct);
    } catch (e) {
      console.log(e);
      notifyError("Lỗi khi lấy sản phẩm!");
    } finally {
      setIsLoading(false);
    }
  };

  const getUserProfile = async () => {
    try {
      const response = await fetch(
        "https://api-exercise-sopi.vercel.app/api/v1/users/profile",
        {
          method: "GET",
          headers: {
            "X-Api-Key": apiKey,
          },
        }
      );
      if (response.status === 401) {
        localStorage.removeItem("apiKey");
        localStorage.removeItem("userEmail");
        setIsApiKeyFetched(false);
        throw new Error(
          "Vui lòng đăng nhập lại để tiếp tục, vui lòng nhập lại email."
        );
      }
      if (!response.ok) {
        throw new Error("Lỗi khi lấy thông tin người dùng");
      }
      const result = await response.json();
      setUserName(result.data.emailId.name);
      notifySuccess(`Xin chào, ${result.data.emailId.name}!`);
    } catch (e) {
      console.log(e);
      notifyError(e.message || "Có lỗi xảy ra!");
    }
  };

  const getApikey = async (email) => {
    try {
      const response = await fetch(
        `https://api-exercise-sopi.vercel.app/api/v1/api-key?email=${email}`
      );
      if (!response.ok) {
        throw new Error("Lỗi khi lấy api key");
      }
      const result = await response.json();
      const apiKey = result.data.apiKey;
      setApiKey(apiKey);
      localStorage.setItem("apiKey", apiKey);
      localStorage.setItem("userEmail", email);
      notifySuccess("Lấy apiKey thành công!");
      setIsApiKeyFetched(true);
    } catch (e) {
      console.log(e);
      notifyError(e.message || "Có lỗi xảy ra!");
    }
  };

  useEffect(() => {
    if (isApiKeyFetched) {
      getUserProfile();
      getProduct();
    }
  }, [isApiKeyFetched]);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getApikey(email);
  };

  if (!isApiKeyFetched) {
    return (
      <div className="box-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="example@example.com"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <ToastContainer />
      </div>
    );
  } else {
    return (
      <>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="box-app">
            <AppContext.Provider value={{ productList, cart, setCart }}>
              <ProductList />
              <Catetories />
            </AppContext.Provider>
            <ToastContainer />
          </div>
        )}
      </>
    );
  }
}

export default App;
