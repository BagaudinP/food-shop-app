import React from "react";
import cartEmptyImg from "../assets/img/cart-empty.svg";
import { Link } from "react-router-dom";

export const CartEmpty = () => {
  return (
    <div className="cart-empty">
      <img src={cartEmptyImg} alt="image" />
      <h1>Ваша корзина пуста 😕</h1>
      <Link to="/" className="d-flex align-center justify-center">
        <svg
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 13L1 6.93015L6.86175 1"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Вернуться к покупкам
      </Link>
    </div>
  );
};
