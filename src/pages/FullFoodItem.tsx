import React from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

const FullFoodItem: React.FC = () => {
  const [food, setFood] = React.useState<{
    imageUrl: string,
    maker: string,
    title: string,
    price: number,
    description: string
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

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
    return <>"Ошибка запроса"</>;
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

export default FullFoodItem;
