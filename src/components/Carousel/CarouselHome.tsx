import React from "react";
import carouselImage from "../../assets/img/carousel-image.jpg";
import { Carousel } from "antd";

import "antd/dist/antd.css";
import "./index.scss";

const CarouselHome: React.FC = () => {
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
