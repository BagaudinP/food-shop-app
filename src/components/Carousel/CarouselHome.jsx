import React from "react";
import carouselImage from "../../assets/img/carousel-image.jpg";

import "antd/dist/antd.css";
import { Carousel } from "antd";
import "./index.scss";

function CarouselHome() {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <img className="carousel" src={carouselImage} alt="carousel" />
        </div>
        <div>
          <img className="carousel" src={carouselImage} alt="carousel" />
        </div>
        <div>
          <img className="carousel" src={carouselImage} alt="carousel" />
        </div>
        <div>
          <img className="carousel" src={carouselImage} alt="carousel" />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselHome;
