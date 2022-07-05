import React from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

const FullFoodItem = () => {
  const [food, setFood] = React.useState();
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(food);
  React.useEffect(() => {
    async function fetchFoodItems() {
      try {
        const { data } = await axios.get("https://62aee578b735b6d16a48d3b4.mockapi.io/items/" + id);
        setFood(data);
      } catch (error) {
        alert("Ошибка при получении товара");
        navigate("/");
      }
    }
    fetchFoodItems();
  }, []);
  if (!food) {
    return "Ошибка запроса";
  }
  return (
    <div className="full-food">
      <div className="full-food__img">
        <img src={food.imageUrl} />
      </div>
      <div className="full-food__description">
        <h2>{food.title}</h2>
        <p>Производитель: {food.maker}</p>
        <h4>{food.price} ₽</h4>
        <p>{food.description}</p>
      </div>
    </div>
  );
};
function foo() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}
function foo() {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
export default FullFoodItem;
