import { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import { useDispatch, useSelector } from "./store/hook";
import { getProfile } from "./store/middlewares/postMiddleware";
import Profile from "./components/Auth/Profile";

export default function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);

  useEffect(() => {
    if (token) {
      dispatch(getProfile(token));
    }
  }, [token]);
  return <div>{token !== "" ? <Profile /> : <Login />}</div>;
}
