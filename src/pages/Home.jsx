import React from "react";
import CarouselHome from "../components/Carousel/CarouselHome";
import Card from "../components/Card/Card.jsx";
import CardSkeleton from "../components/Card/CardSkeleton.jsx";
import Categories from "../components/Categories";
import Sort, { listPopup } from "../components/Sort";
import Pagination from "../components/Pagination/Pagination";
import { AppContext } from "../App";

import { useNavigate } from "react-router-dom";
import qs from "qs";
import { setCategoriesIndex, setCurrentPage, setFilters } from "../redux/slices/filterSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSeacrh = React.useRef(false);
  const isMounted = React.useRef(false);

  const { categoriesIndex, sortIndex, currentPage } = useSelector((state) => state.filterSlice);

  const { searchValue } = React.useContext(AppContext);

  const [foodItems, setFoodItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const onClickCategory = (index) => {
    dispatch(setCategoriesIndex(index));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const fetchItems = () => {
    setIsLoading(true);

    const categories = categoriesIndex > 0 ? `category=${categoriesIndex}` : "";
    const sortBy = sortIndex.sortProperty.replace("-", "");
    const order = sortIndex.sortProperty.includes("-") ? "ask" : "desc";
    const search = searchValue ? `search=${searchValue}` : "";
    axios
      .get(
        `https://62aee578b735b6d16a48d3b4.mockapi.io/items?page=${currentPage}&${search}&limit=8&${categories}&sortBy=${sortBy}&order=${order}`
      )
      .then((resp) => {
        setFoodItems(resp.data);
        setIsLoading(false);
      });
  };

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sortIndex.sortProperty,
        categoriesIndex,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoriesIndex, sortIndex.sortProperty, currentPage, searchValue]);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = listPopup.find((obj) => obj.sortProperty === params.sortProperty);

      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      isSeacrh.current = true;
    }
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSeacrh.current) {
      fetchItems();
    }
    isSeacrh.current = false;
  }, [categoriesIndex, sortIndex.sortProperty, currentPage, searchValue]);

  return (
    <div className="main__content">
      <div className="main__content-title">
        {/* <h1 className="mb-20">
        Продукты по акции
      </h1>
      <CarouselHome /> */}
        <div className="d-flex justify-between align-center mb-20">
          <h1>Все продукты</h1>
          <Sort />
        </div>
      </div>
      <Categories categoriesIndex={categoriesIndex} onClickCategory={onClickCategory} />
      <div className="main__content-item">
        {isLoading
          ? [...new Array(8)].map((_, index) => <CardSkeleton key={index} />) // _, - чтобы js не ругался
          : foodItems?.map((obj) => <Card key={obj.id} {...obj} />)}
      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
}
