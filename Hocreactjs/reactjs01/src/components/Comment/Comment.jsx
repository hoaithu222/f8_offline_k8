import { createContext, useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
export const CommentContext = createContext();

export default function Comment() {
  const [listComment, setListComment] = useState([
    { id: 1, content: "comment 1" },
    { id: 2, content: "comment 2" },
  ]);
  // const [commentValue, setCommentValue] = useState("");

  // const onSubmit = (value) => {
  //   setListComment([
  //     ...listComment,
  //     {
  //       id: listComment.length + 1,
  //       content: value,
  //     },
  //   ]);
  //   setCommentValue("");
  // };

  // const handleChangeValue = (e) => {
  //   setCommentValue(e.target.value);
  // };

  return (
    <div>
      <h2>Comment ({listComment.length})</h2>{" "}
      <CommentContext.Provider value={{ listComment, setListComment }}>
        <CommentList />
        <CommentForm
        // onSubmit={onSubmit}
        // commentValue={commentValue}
        // onChange={handleChangeValue}
        />
      </CommentContext.Provider>
    </div>
  );
}
