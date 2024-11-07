"use client";

import { useRef } from "react";
import { handleSubmit } from "./action";

export default function TodoAdd2() {
  //   const id = 1;
  //   const handleSubmit = async (formData) => {
  //     "use server";
  //     const title = formData.get("title");
  //     console.log(title);
  //     console.log(id);
  //   };
  const formRef = useRef();
  return (
    <div>
      <form
        action={async (formData) => {
          const response = await handleSubmit(formData);
          if (response.success) {
            formRef.current.reset();
          }
        }}
        ref={formRef}
      >
        <input type="text" placeholder="Title..." name="title" />
        <button>Add</button>
      </form>
    </div>
  );
}
