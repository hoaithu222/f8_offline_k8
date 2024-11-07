import ProductList from "./ProductList";
import SearchForm from "./SearchForm";

export default function ProductsPage({ searchParams }) {
  const { keyword, status } = searchParams;
  return (
    <div>
      <h1>Products</h1>
      <h3>Keyword: {keyword}</h3>
      <h3>Status: {status}</h3>
      <SearchForm />
      <ProductList />
    </div>
  );
}
