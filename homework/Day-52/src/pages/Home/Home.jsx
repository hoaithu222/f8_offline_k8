import { useDispatch, useSelector } from "react-redux";
import { FaCartPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { getProducts } from "../../redux-toolkit/slices/productReducer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ReactPaginate from "react-paginate";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./Home.css";
import { add } from "../../redux-toolkit/slices/cartReducer";
import { toast } from "react-toastify";

export default function Home() {
  const dispatch = useDispatch();
  const { page } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  useEffect(() => {
    if (page) {
      setCurrentPage(Number(page));
    }
  }, [page]);

  useEffect(() => {
    dispatch(getProducts({ limit: productsPerPage, page: currentPage }));
  }, [dispatch, currentPage]);

  const { listProduct, totalProducts, loading, error } = useSelector(
    (state) => state.product
  );
  const pageCount = Math.ceil(totalProducts / productsPerPage);

  const handlePageClick = (event) => {
    const newPage = event.selected + 1;
    setCurrentPage(newPage);
    navigate(`/${newPage}`);
  };
  const handleClick = (product) => {
    dispatch(add(product));
    toast.success(`${product.name} đã được thêm vào giỏ hàng!`);
  };
  if (loading) {
    return (
      <div className="container">
        <h2 className="title">PRODUCTS</h2>
        <div className="products-list">
          {Array.from({ length: productsPerPage }).map((_, index) => (
            <div className="product-item" key={index}>
              <Skeleton height={150} style={{ marginBottom: "10px" }} />
              <Skeleton className="name" />
              <Skeleton className="buy" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="container">
        <h2 className="title">PRODUCTS</h2>
        {listProduct.length === 0 && <p>No products available.</p>}
        <div className="products-list">
          {(listProduct || []).map((product) => (
            <div className="product-item" key={product._id}>
              <Link
                to={`details/${encodeURIComponent(product.name)}/${
                  product._id
                }`}
                style={{ color: "#000", textDecoration: "none" }}
              >
                <div className="info-product">
                  <div className="inner-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <h3 className="name">{product.name}</h3>
                </div>
              </Link>
              <div className="buy">
                <div className="price">
                  $<span>{product.price.toLocaleString()}</span>
                </div>
                <FaCartPlus
                  className="cart"
                  onClick={() => handleClick(product)}
                />
              </div>
            </div>
          ))}
        </div>

        {pageCount > 1 && (
          <ReactPaginate
            previousLabel={"< Previous"}
            nextLabel={"Next >"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
            forcePage={currentPage - 1}
          />
        )}
      </div>
    </div>
  );
}
