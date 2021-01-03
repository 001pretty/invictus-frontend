import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import Slide1 from "assets/slideshow1.webp";
import Slide2 from "assets/slideshow2.webp";
import Slide3 from "assets/slideshow3.webp";

import "./Slideshow.css";

const Slideshow = () => { 
  const slideImages = [Slide1, Slide3, Slide2];

  return (
    <div className="slide-container">
      <Slide indicators arrows={false}>
        <div className="each-slide">
          <div
            className="Slideshow"
            style={{
              backgroundImage: `url(${slideImages[0]})`,
            }}
          ></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            <div className="slide-content"></div>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <div className="slide-content"></div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
