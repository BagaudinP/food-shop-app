import React from "react";

function Categories({ categoriesIndex, onClickCategory }) {
  const categories = [
    "Все",
    "Сыры полутвёрдые и твёрдые",
    "Хлебобулочная продукция",
    "Мясные продукты",
    "Соки",
    "Яйца",
    "Кондитерские изделия",
    "Сметана",
    "Растительные молочные продукты",
    "Йогурт ложковый",
  ];
  return (
    <div className="main__content-categories">
      <ul className="d-flex align-center flex-wrap">
        {categories.map((categoriesiItem, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={categoriesIndex === index ? "active" : ""}>
            {categoriesiItem}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
