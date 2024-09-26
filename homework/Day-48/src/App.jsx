import "./App.css";
import { useEffect, useState } from "react";
import {
  getApiKey,
  fetchTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  findTodo,
} from "./api/todoApi";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm/TodoForm";
import { notifySuccess, notifyError } from "./utils/notifications";
import LoadingSpinner from "./components/Loading/LoadingSpinner";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "@mui/material";

function App() {
  const [apiKey, setApiKey] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedApiKey = localStorage.getItem("apiKey");
    if (savedApiKey) {
      setApiKey(savedApiKey);
      loadTodos(savedApiKey);
    }
  }, []);

  const loadTodos = (apiKey) => {
    setLoading(true);
    fetchTodos(apiKey)
      .then((result) => {
        if (result.data && Array.isArray(result.data.listTodo)) {
          setTodos(result.data.listTodo);
        } else {
          console.error("Dữ liệu todos không hợp lệ");
          notifyError("Dữ liệu không hợp lệ. Vui lòng tải lại trang.");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Lỗi khi lấy todos:", err);
        notifyError(
          "Không thể tải danh sách công việc. Vui lòng tải lại trang."
        );
        setApiKey("");
        setLoading(false);
      });
  };
  const promptForEmail = () => {
    const email = prompt("Vui lòng nhập email của bạn:");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const name = email.split("@")[0];

    if (email && emailPattern.test(email)) {
      getApiKey(email)
        .then((response) => {
          if (
            response.code === 400 ||
            response.status_code === "FAILED" ||
            response.code === 401
          ) {
            notifyError(response.message);
            return;
          }
          const apiKey = response;
          setApiKey(apiKey);
          localStorage.setItem("apiKey", apiKey);
          notifySuccess(`Chào mừng bạn ${name} quay trở lại`);
          loadTodos(apiKey);
        })
        .catch((err) => {
          console.error("Lỗi khi lấy API key:", err);
          notifyError("Email không hợp lệ. Vui lòng nhập lại.");
        });
    } else {
      notifyError("Email không hợp lệ. Vui lòng nhập lại.");
    }
  };

  const handleAddTodo = async (todo) => {
    if (!apiKey) {
      notifyError("Vui lòng nhập email để thực hiện thao tác.");
      return;
    }
    try {
      setLoading(true);
      const todoData = { todo: todo.text };
      const result = await addTodo(apiKey, todoData);
      if (result && result.data) {
        setTodos((prevTodos) => [...prevTodos, result.data]);
        notifySuccess("Thêm công việc thành công");
        setLoading(false);
      } else {
        notifyError("Không thể thêm công việc");
      }
    } catch (err) {
      console.error("Lỗi khi thêm công việc:", err);
      notifyError("Không thể thêm công việc. Vui lòng tải lại trang.");
    }
  };
  const handleSreachTodo = async (todo) => {
    if (!apiKey) {
      notifyError("Vui lòng nhập email để thực hiện thao tác.");
      return;
    }
    try {
      setLoading(true);
      const result = await findTodo(apiKey, todo);
      if (result && result.data.listTodo) {
        setTodos(result.data.listTodo);
        notifySuccess("Tìm kiếm công việc thành công");
        setLoading(false);
      } else {
        notifyError("Không thể tìm kiếm công việc");
      }

      console.log(result);
    } catch (e) {
      console.log(e);
      notifyError("Không thể tìm kiếm công việc . Vui lòng tải lại trang.");
    }
  };
  const handleUpdateTodo = async (id, updatedTodo) => {
    if (!apiKey) {
      notifyError("Vui lòng nhập email để thực hiện thao tác.");
      return;
    }
    try {
      setLoading(true);
      const result = await updateTodo(apiKey, id, updatedTodo);
      if (result && result.data) {
        setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo._id === id ? result.data : todo))
        );
        notifySuccess("Cập nhật công việc thành công");
        setLoading(false);
      } else {
        notifyError("Không thể cập nhật công việc. Vui lòng tải lại trang.");
      }
    } catch (err) {
      notifyError("Không thể cập nhật công việc. Vui lòng tải lại trang.");
    }
  };

  const handleDeleteTodo = (id) => {
    if (!apiKey) {
      notifyError("Vui lòng nhập email để thực hiện thao tác.");
      return;
    }
    toast.warning(
      <div>
        <span>Bạn có chắc chắn muốn xóa công việc này?</span>
        <button
          onClick={async () => {
            try {
              setLoading(true);
              await deleteTodo(apiKey, id);
              setTodos((prevTodos) =>
                prevTodos.filter((todo) => todo._id !== id)
              );
              notifySuccess("Xóa công việc thành công");
              setLoading(false);
            } catch (err) {
              notifyError("Không thể xóa công việc. Vui lòng tải lại trang.");
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

  return (
    <div>
      <div className="container">
        <h1 className="title">Welcome to Todo App!</h1>
        {!apiKey && (
          <div>
            <p>Vui lòng nhập email của bạn để tiếp tục.</p>
            <Button
              onClick={promptForEmail}
              className="btn_email"
              style={{ color: "#fff", background: "#5bc0de" }}
            >
              Nhập Email
            </Button>
          </div>
        )}

        {apiKey && (
          <div>
            <TodoForm onAdd={handleAddTodo} onSearch={handleSreachTodo} />
            {loading ? (
              <LoadingSpinner />
            ) : (
              <TodoList
                todos={todos}
                onDelete={handleDeleteTodo}
                onUpdate={handleUpdateTodo}
              />
            )}
          </div>
        )}
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
