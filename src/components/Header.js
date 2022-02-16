import React from "react";

function Header() {
  return (
    <header className="d-flex justify-between align-center">
      <div className="d-flex align-center cu-p">
        <img width={22} alt="logo" src="/img/logo.svg" />
        <div className="ml-10">
          <h3>Сурсат</h3>
          <p className="opacity-7">полезно и вкусно</p>
        </div>
      </div>
      <div className="search-block">
        <input placeholder="Поиск по товарам" />
        <img width={18} src="/img/search.svg" alt="Поиск" />
      </div>
      <ul className="d-flex align-center">
        <li className="d-flex mr-25 cu-p">
          <img width={18} src="/img/user.svg" alt="Пользователь" />
        </li>
        <li className="d-flex mr-20 cu-p">
          <img width={22} className="mr-10" src="/img/basket.svg" alt="Корзина" />
          <span>2010 ₽</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
