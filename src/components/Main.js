import React from "react";
import CarouselHome from "./Carousel/CarouselHome";
import Card from "./Card/Card";

function Main() {
  return (
    <div className="main">
      <div>
        <div>
          <h1 style={{ fontSize: "24px" }} className="mb-20">
            Продукты по акции
          </h1>
          <CarouselHome />
          <div className="d-flex justify-between align-center mb-20">
            <h1 style={{ fontSize: "24px" }}>Все продукты</h1>
            <div>
              <select className="cu-p">
                <option>По популярности</option>
                <option value="1">По цене</option>
                <option value="2">По алфавиту</option>
              </select>
            </div>
          </div>
        </div>
        <div className="categories mb-30">
          <ul className="d-flex align-center flex-wrap">
            <li>Все</li>
            <li>Сыры полутвёрдые и твёрдые </li>
            <li>Хлебобулочная продукция</li>
            <li>Мясные продукты</li>
            <li>Соки</li>
            <li>Яйца</li>
            <li>Кондитерские изделия</li>
            <li>Сметана</li>
            <li>Растительные молочные продукты</li>
            <li>Йогурт ложковый</li>
          </ul>
        </div>
        <div className="d-flex align-center flex-wrap">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Main;
