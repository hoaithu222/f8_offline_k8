import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "../../store/hook";
import { getToken } from "../../store/middlewares/postMiddleware";

export default function Login() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getToken(data));
  };
  console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="nhập email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="nhập password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
