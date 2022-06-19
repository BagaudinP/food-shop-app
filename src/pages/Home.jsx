import React from "react";
import CarouselHome from "../components/Carousel/CarouselHome";
import Card from "../components/Card/Card.jsx";
import CardSkeleton from "../components/Card/CardSkeleton.jsx";
import Categories from "../components/Categories";
import Sort from "../components/Sort";

import axios from "axios";

export default function Home() {
  const [foodItems, setFoodItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    axios.get("https://62aee578b735b6d16a48d3b4.mockapi.io/items").then((resp) => {
      const allItems = resp.data;
      setFoodItems(allItems);
      setIsLoading(false);
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main__content">
      <div className="main__content-title">
        {/* <h1 style={{ fontSize: "24px" }} className="mb-20">
        Продукты по акции
      </h1>
      <CarouselHome /> */}
        <div className="d-flex justify-between align-center mb-20">
          <h1 style={{ fontSize: "24px" }}>Все продукты</h1>
          <Sort />
        </div>
      </div>
      <Categories />
      <div className="main__content-item">
        {isLoading
          ? [...new Array(8)].map((_, index) => <CardSkeleton key={index} />)
          : foodItems?.map((obj) => <Card key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}
