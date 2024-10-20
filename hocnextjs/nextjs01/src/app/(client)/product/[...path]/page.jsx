import React from "react";

export default function ProductDetails({ params }) {
  const { path } = params;
  const [slug, id] = path;
  return (
    <div>
      <h1>Chi tiết sản phẩm</h1>
      <h3>ID : {id}</h3>
      <h4>Slug : {slug}</h4>
    </div>
  );
}
