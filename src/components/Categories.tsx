import React from "react";


type CategoriesProps = {
  categoriesIndex: number;
  onClickCategory: (index: number) => void;
}

const categories: string[] = [
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

const Categories: React.FC<CategoriesProps> = ({ categoriesIndex, onClickCategory }) => {
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
