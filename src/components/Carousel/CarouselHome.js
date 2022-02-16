import React from "react";

import "antd/dist/antd.css";
import { Carousel } from "antd";
import "./index.scss";

function CarouselHome() {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <img className="carousel" src="/img/carousel-image.jpg" alt="carousel" />
        </div>
        <div>
          <img className="carousel" src="/img/carousel-image.jpg" alt="carousel" />
        </div>
        <div>
          <img className="carousel" src="/img/carousel-image.jpg" alt="carousel" />
        </div>
        <div>
          <img className="carousel" src="/img/carousel-image.jpg" alt="carousel" />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselHome;
