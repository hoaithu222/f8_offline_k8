import React from "react";
import ProductList from "./productList";
import SearchForm from "./SearchForm";

export default function ProductPage({ searchParams }) {
  const { keyword, status } = searchParams;

  return (
    <div>
      <h1>ProductPage</h1>
      <h2>Keyword : {keyword}</h2>
      <h2>Status : {status}</h2>
      <SearchForm />
      <ProductList />
    </div>
  );
}
