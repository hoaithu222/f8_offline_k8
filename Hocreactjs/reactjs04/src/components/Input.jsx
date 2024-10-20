import React from "react";
import { useId } from "react";

export default function Input({ label, type = "text", name }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={`${label}...`} name={name} />
    </div>
  );
}
