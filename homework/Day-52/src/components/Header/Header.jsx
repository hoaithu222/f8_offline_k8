import React from "react";
import { BsHandbag } from "react-icons/bs";
import "./style.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <header>
      <div className="container">
        <div className="inner-wrap">
          <div className="logo">
            <h2>My Shop</h2>
          </div>
          <Link to="cart">
            <div className="cart" style={{ color: "#fff" }}>
              <BsHandbag className="bag" />
              <span className="number">{quantity}</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
