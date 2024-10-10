import React from "react";
import { memo2 } from "../utils/memo2";
function Content() {
  console.log("render content");
  return (
    <div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque natus
        consectetur odio quibusdam illo a qui soluta sunt molestiae. Asperiores.
      </p>
    </div>
  );
}
export default memo2(Content);
// export default React.memo(Content);
//  React.memo ==> HOC
