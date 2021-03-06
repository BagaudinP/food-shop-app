import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartItemById } from "../../redux/slices/cart/selectors";
import { addItem } from "../../redux/slices/cart/slice";
import { CartItem } from "../../redux/slices/cart/types";

type CardProps = {
  id: string, 
  title: string, 
  price: number, 
  imageUrl: string, 
  maker: string, 
  sizes: number[],
  count: number,
}

const Card: React.FC<CardProps> = ({ id, title, price, imageUrl, maker, sizes }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));
  const [activeSize, setActiveSize] = React.useState(0);

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      title,
      price,
      imageUrl,
      maker,
      size: sizes[activeSize],
      count: 0
    };
    dispatch(addItem(item));
  };

  return (
    <div className="card">
      <div className="card__favorite">
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.88303 16.3322L8.88231 16.3316C6.2971 14.032 4.19229 12.1589 2.72777 10.4025C1.26867 8.65268 0.5 7.08163 0.5 5.3951C0.5 2.65902 2.68702 0.5 5.5 0.5C7.09217 0.5 8.62543 1.22946 9.62243 2.37792L10 2.81285L10.3776 2.37792C11.3746 1.22946 12.9078 0.5 14.5 0.5C17.313 0.5 19.5 2.65902 19.5 5.3951C19.5 7.08164 18.7313 8.65271 17.2721 10.4039C15.8098 12.1588 13.7093 14.0312 11.1297 16.3307L11.1184 16.3408L11.1173 16.3417L10.0013 17.3308L8.88303 16.3322Z"
            stroke="white"
          />
        </svg>
      </div>
      <Link to={`/itemFood/${id}`}>
        <img className="card__image" src={imageUrl} alt="Card" />
      </Link>
      <div className="card__title">
        <h4>{title}</h4>
        <p>Производитель: {maker}</p>
        <div className="card__title-selector">
          <ul>
            {sizes.map((size, index) => (
              <li
                key={index}
                onClick={() => setActiveSize(index)}
                className={activeSize === index ? "active" : ""}>
                {size} гр
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card__price">
        <h3>от {price} ₽</h3>
        <div onClick={onClickAdd} className="card__price-btn d-flex justify-center align-center">
          <svg
            width="21"
            height="16"
            viewBox="0 0 21 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.25 6.59385V7.15635C20.25 7.62235 19.8722 8.0001 19.4062 8.0001H19.125L18.207 14.4262C18.0882 15.2576 17.3762 15.8751 16.5364 15.8751H3.71355C2.87378 15.8751 2.16179 15.2576 2.043 14.4262L1.125 8.0001H0.84375C0.377754 8.0001 0 7.62235 0 7.15635V6.59385C0 6.12785 0.377754 5.7501 0.84375 5.7501H3.21121L6.96519 0.588424C7.33064 0.0859707 8.03419 -0.0251583 8.53671 0.340291C9.0392 0.70574 9.15029 1.40932 8.78484 1.91181L5.99333 5.7501H14.2567L11.4652 1.91178C11.0997 1.40932 11.2108 0.705705 11.7133 0.340256C12.2157 -0.0251934 12.9194 0.0859004 13.2848 0.588389L17.0388 5.7501H19.4062C19.8722 5.7501 20.25 6.12785 20.25 6.59385ZM10.9688 12.7814V8.84385C10.9688 8.37785 10.591 8.0001 10.125 8.0001C9.659 8.0001 9.28125 8.37785 9.28125 8.84385V12.7814C9.28125 13.2473 9.659 13.6251 10.125 13.6251C10.591 13.6251 10.9688 13.2473 10.9688 12.7814ZM14.9062 12.7814V8.84385C14.9062 8.37785 14.5285 8.0001 14.0625 8.0001C13.5965 8.0001 13.2188 8.37785 13.2188 8.84385V12.7814C13.2188 13.2473 13.5965 13.6251 14.0625 13.6251C14.5285 13.6251 14.9062 13.2473 14.9062 12.7814ZM7.03125 12.7814V8.84385C7.03125 8.37785 6.6535 8.0001 6.1875 8.0001C5.7215 8.0001 5.34375 8.37785 5.34375 8.84385V12.7814C5.34375 13.2473 5.7215 13.6251 6.1875 13.6251C6.6535 13.6251 7.03125 13.2473 7.03125 12.7814Z"
              fill="white"
            />
          </svg>
          {addedCount > 0 && <div className="card__price-btn__count">{addedCount}</div>}
        </div>
      </div>
    </div>
  );
}

export default Card;
