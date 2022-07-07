import React from "react";
import logoSursat from "../assets/img/logo.svg";
import Search from "./Search/Search";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { selectCart } from "../redux/slices/cart/selectors";

const Header: React.FC = () => {
  const { items, totalPrice } = useSelector(selectCart);
  const location = useLocation();
  const isMounted = React.useRef(false);

  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items)
      localStorage.setItem('cart', json)  
    } 
    isMounted.current = true;
  }, [items])
  
  return (
    <header className="d-flex justify-between align-center">
      <Link to="/">
        <div className="d-flex align-center cu-p">
          <img width={22} alt="logo" src={logoSursat} />
          <div className="ml-10">
            <h3>Сурсат</h3>
            <p className="opacity-7">полезно и вкусно</p>
          </div>
        </div>
      </Link>
      {location.pathname !== "/cart" && (<Search />)}
      <ul className="d-flex align-center">
        <li className="d-flex mr-25 cu-p">
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 6C13 8.20914 11.2091 10 9 10C6.79086 10 5 8.20914 5 6C5 3.79086 6.79086 2 9 2C11.2091 2 13 3.79086 13 6ZM12.643 10.7678C14.0759 9.67134 15 7.94359 15 6C15 2.68629 12.3137 0 9 0C5.68629 0 3 2.68629 3 6C3 7.94359 3.92413 9.67134 5.35697 10.7678C2.20134 12.1664 0 15.3261 0 19C0 19.5523 0.447715 20 1 20C1.55228 20 2 19.5523 2 19C2 15.134 5.13401 12 9 12C12.866 12 16 15.134 16 19C16 19.5523 16.4477 20 17 20C17.5523 20 18 19.5523 18 19C18 15.3261 15.7987 12.1664 12.643 10.7678Z"
              fill="white"
            />
          </svg>
        </li>
        {location.pathname !== "/cart" && (
          <Link to="cart">
            <li className="d-flex mr-20 cu-p">
              <div className="d-flex basket">
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 21 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.25 6.59385V7.15635C20.25 7.62235 19.8722 8.0001 19.4062 8.0001H19.125L18.207 14.4262C18.0882 15.2576 17.3762 15.8751 16.5364 15.8751H3.71355C2.87378 15.8751 2.16179 15.2576 2.043 14.4262L1.125 8.0001H0.84375C0.377754 8.0001 0 7.62235 0 7.15635V6.59385C0 6.12785 0.377754 5.7501 0.84375 5.7501H3.21121L6.96519 0.588424C7.33064 0.0859707 8.03419 -0.0251583 8.53671 0.340291C9.0392 0.70574 9.15029 1.40932 8.78484 1.91181L5.99333 5.7501H14.2567L11.4652 1.91178C11.0997 1.40932 11.2108 0.705705 11.7133 0.340256C12.2157 -0.0251934 12.9194 0.0859004 13.2848 0.588389L17.0388 5.7501H19.4062C19.8722 5.7501 20.25 6.12785 20.25 6.59385ZM10.9688 12.7814V8.84385C10.9688 8.37785 10.591 8.0001 10.125 8.0001C9.659 8.0001 9.28125 8.37785 9.28125 8.84385V12.7814C9.28125 13.2473 9.659 13.6251 10.125 13.6251C10.591 13.6251 10.9688 13.2473 10.9688 12.7814ZM14.9062 12.7814V8.84385C14.9062 8.37785 14.5285 8.0001 14.0625 8.0001C13.5965 8.0001 13.2188 8.37785 13.2188 8.84385V12.7814C13.2188 13.2473 13.5965 13.6251 14.0625 13.6251C14.5285 13.6251 14.9062 13.2473 14.9062 12.7814ZM7.03125 12.7814V8.84385C7.03125 8.37785 6.6535 8.0001 6.1875 8.0001C5.7215 8.0001 5.34375 8.37785 5.34375 8.84385V12.7814C5.34375 13.2473 5.7215 13.6251 6.1875 13.6251C6.6535 13.6251 7.03125 13.2473 7.03125 12.7814Z"
                    fill="white"
                  />
                </svg>
                {totalCount > 0 && (
                  <div className="basket-total d-flex justify-center align-center">
                    {totalCount}
                  </div>
                )}
              </div>
              <span>{totalPrice} ₽</span>
            </li>
          </Link>
        )}
      </ul>
    </header>
  );
}

export default Header;
