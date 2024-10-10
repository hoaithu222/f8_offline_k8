import React from "react";

function ResetButton({ onClick }) {
  console.log("Reset");
  return (
    <div>
      <button onClick={onClick}>Reset</button>
    </div>
  );
}
export default React.memo(ResetButton);
