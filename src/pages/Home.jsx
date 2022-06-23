import React from "react";
import CarouselHome from "../components/Carousel/CarouselHome";
import Card from "../components/Card/Card.jsx";
import CardSkeleton from "../components/Card/CardSkeleton.jsx";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Pagination from "../components/Pagination/Pagination";
import { AppContext } from "../App";

import axios from "axios";

export default function Home() {
  const { searchValue } = React.useContext(AppContext);
  const [foodItems, setFoodItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoriesIndex, setCategoriesIndex] = React.useState(0);
  const [sortIndex, setSortIndex] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  });
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    setIsLoading(true);

    const categories = categoriesIndex > 0 ? `category=${categoriesIndex}` : "";
    const sortBy = sortIndex.sortProperty.replace("-", "");
    const order = sortIndex.sortProperty.includes("-") ? "ask" : "desc";
    const search = searchValue ? `search=${searchValue}` : "";
    axios
      .get(
        `https://62aee578b735b6d16a48d3b4.mockapi.io/items?page=${currentPage}&${search}&limit=4&${categories}&sortBy=${sortBy}&order=${order}`
      )
      .then((resp) => {
        const allItems = resp.data;
        setFoodItems(allItems);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoriesIndex, sortIndex, currentPage, searchValue]);

  return (
    <div className="main__content">
      <div className="main__content-title">
        {/* <h1 style={{ fontSize: "24px" }} className="mb-20">
        Продукты по акции
      </h1>
      <CarouselHome /> */}
        <div className="d-flex justify-between align-center mb-20">
          <h1 style={{ fontSize: "24px" }}>Все продукты</h1>
          <Sort sortIndex={sortIndex} onClickSort={(index) => setSortIndex(index)} />
        </div>
      </div>
      <Categories
        categoriesIndex={categoriesIndex}
        onClickCategory={(index) => setCategoriesIndex(index)}
      />
      <div className="main__content-item">
        {isLoading
          ? [...new Array(8)].map((_, index) => <CardSkeleton key={index} />) // _, - чтобы js не ругался
          : foodItems?.map((obj) => <Card key={obj.id} {...obj} />)}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
}
