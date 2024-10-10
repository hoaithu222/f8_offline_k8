import { useEffect } from "react";
import { useSelector, useDispatch } from "../store/hook";
import { getPosts } from "../store/middlewares/postMiddleware";

export default function Post() {
  const postList = useSelector((state) => state.postList);
  const dispatch = useDispatch();
  console.log(postList);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div>
      <h2>Posts</h2>
    </div>
  );
}
