import { useContext, useState } from "react";
import { AppContext } from "../../App06";
import { CommentContext } from "./Comment";
export default function CommentForm() {
  const [comment, setComment] = useState("");
  const { setListComment, listComment } = useContext(CommentContext);
  const { message, onClick } = useContext(AppContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    // onSubmit(commentValue);
    setListComment([
      ...listComment,
      { id: listComment.length + 1, content: comment },
    ]);
    setComment("");
  };
  const onChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          name="comment"
          placeholder="Write a comment"
          value={comment}
          onChange={onChange}
        />
        <button type="submit">Send</button>
      </form>
      <h2>{message}</h2>
      <button onClick={onClick}>Change Message</button>
    </div>
  );
}
