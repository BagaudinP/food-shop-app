import React from "react";
import styles from "./Card.module.scss";

function Card() {
  return (
    <div className="d-flex align-center flex-wrap">
      <div className={styles.card}>
        <div className={styles.favorite}>
          <img src="/img/heart-unliked.svg" alt="Нравится" />
        </div>
        <img className={styles.image} src="/img/card-img/img1.jpg" alt="Card" />
        <div className={styles.title}>
          <h4>Масло сливочное 82%</h4>
          <p>Производитель: Россия</p>
          <p>500 гр</p>
        </div>
        <div className={styles.price}>
          <h3>290 ₽</h3>
          <span className="d-flex justify-center align-center">
            <img src="/img/basket.svg" alt="Корзина" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
