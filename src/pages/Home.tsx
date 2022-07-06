import React from "react";
import CarouselHome from "../components/Carousel/CarouselHome";
import Card from "../components/Card/Card";
import CardSkeleton from "../components/Card/CardSkeleton";
import Categories from "../components/Categories";
import Sort, { listPopup } from "../components/Sort";
import Pagination from "../components/Pagination/Pagination";

import { useNavigate } from "react-router-dom";
import qs from "qs";
import {
  setCategoriesIndex,
  setCurrentPage,
  setFilters,
  selectFilter,
} from "../redux/slices/filterSlice";
import { fetchFoodItems, selectFoodData } from "../redux/slices/foodItemsSlice";
import { useSelector, useDispatch } from "react-redux";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSeacrh = React.useRef(false);
  const isMounted = React.useRef(false);

  const { categoriesIndex, sortIndex, currentPage, searchValue } = useSelector(selectFilter);
  const { foodItems, status } = useSelector(selectFoodData);

  const onClickCategory = (index: number) => {
    dispatch(setCategoriesIndex(index));
  };

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const fetchItems = async () => {
    const sortBy = sortIndex.sortProperty.replace("-", "");
    const order = sortIndex.sortProperty.includes("-") ? "ask" : "desc";
    const categories = categoriesIndex > 0 ? `category=${categoriesIndex}` : "";
    const search = searchValue ? `search=${searchValue}` : "";

    dispatch(
      // @ts-ignore
      fetchFoodItems({
        sortBy,
        order,
        categories,
        search,
        currentPage,
      })
    );
    window.scrollTo(0, 0);
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

      // dispatch(
      //   setFilters({
      //     ...params,
      //     sort,
      //   })
      // );
      // isSeacrh.current = true;
    }
  }, [categoriesIndex, sortIndex.sortProperty, currentPage, searchValue]);

  React.useEffect(() => {
    fetchItems();
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
      {status === "error" ? (
        <div className="main__content-item__error">
          <h1>Произошла ошибка 😕</h1>
          <p>При запросе продуктов произошла ошибка. Вернитесь к нам позже.</p>
        </div>
      ) : (
        <div className="main__content-item">
          {status === "loading"
            ? [...new Array(8)].map((_, index) => <CardSkeleton key={index} />) // _, - чтобы js не ругался
            : foodItems?.map((obj: any) => <Card key={obj.id} {...obj} />)}
        </div>
      )}
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
}

export default Home;
