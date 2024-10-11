import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailsProduct } from "../../redux-toolkit/slices/detailsProduct";
import { add } from "../../redux-toolkit/slices/cartReducer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./style.css";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { name, id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { detailsProduct, loading, error } = useSelector(
    (state) => state.detailsProduct
  );

  useEffect(() => {
    dispatch(getDetailsProduct({ id }));
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="product-details">
        <div className="container">
          <div className="inner-box-details">
            <div className="image-details skeleton">
              <Skeleton height={400} width="100%" />
            </div>
            <div className="inner-content-details">
              <Skeleton height={30} width={150} className="brand-details" />
              <Skeleton height={40} width="80%" className="name-details" />
              <Skeleton height={20} count={3} className="desc-details" />
              <Skeleton height={25} width={200} className="category-details" />
              <Skeleton height={35} width={100} className="price-details" />
              <Skeleton height={45} width={150} className="button-details" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="product-details">
      <div className="container">
        <div className="inner-box-details">
          <div className="image-details">
            <img src={detailsProduct.image} alt={detailsProduct.name} />
          </div>
          <div className="inner-content-details">
            <p className="brand-details">{detailsProduct.brand}</p>
            <h2 className="name-details">{detailsProduct.name}</h2>
            <p className="desc-details">{detailsProduct.description}</p>
            <p className="category-details">
              Category : {detailsProduct.category}
            </p>
            <button className="button" onClick={() => navigate(-1)}>
              Go home
            </button>
            <h3 className="price-details">${detailsProduct.price}</h3>
            <button
              className="button-details"
              onClick={() => {
                dispatch(add(detailsProduct));
                toast.success(
                  `${detailsProduct.name} đã được thêm vào giỏ hàng!`
                );
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
