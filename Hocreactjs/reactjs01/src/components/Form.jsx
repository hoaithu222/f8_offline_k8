import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({});
  const [msg, setMsg] = useState({});
  const [users, setUsers] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate
    // Kiểm tra nếu validate thành công --> Log chữ thành công
    // Ngược lại : hiển thị lỗi ở từng input
    const errors = {};
    if (!form.name) {
      errors.name = "Bạn chưa nhập name";
    }
    if (!form.email) {
      errors.email = "Bạn chưa nhập email";
    }
    if (!Object.keys(errors).length) {
      console.log("Thành công");
      setUsers([...users, { name: form.name, email: form.email }]);
      setForm({});
    }
    setMsg(errors);
    console.log(errors);
  };

  const handleChangeValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleRemove = (index) => {
    if (window.confirm("Chắc chưa")) {
      setUsers(users.filter((_, _index) => _index != index));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name...."
            name="name"
            onChange={handleChangeValue}
            value={form.name ?? ""}
          ></input>
          {msg.name && <p>{msg.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email...."
            name="email"
            onChange={handleChangeValue}
            value={form.email ?? ""}
          ></input>
          {msg.email && <p>{msg.email}</p>}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <>
        <hr />
        <h2>Danh Sách Người Dùng</h2>
        {users.map(({ name, email }, index) => (
          <p key={index}>
            {name} - {email}{" "}
            <button onClick={() => handleRemove(index)}>&times;</button>
          </p>
        ))}
      </>
    </div>
  );
}
