import { useContext } from "react";
import { CommentContext } from "./Comment";

export default function CommentList() {
  const { listComment } = useContext(CommentContext);
  return (
    <div>
      {listComment.map((item) => (
        <div key={item.id}>
          <p>{item.content}</p>
          <button>Sửa</button>
        </div>
      ))}
    </div>
  );
}
