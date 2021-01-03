import React from "react";
import "./Fit.css";

function Fit({fitItems}) {


  return (
    <div className="Fit-Wrapper">
      <div className="Fit-Image">
        <img src={fitItems.portraitUrl} alt="" />
      </div>
      <div className="Mens-Title">GET THE FIT</div>
      <div className="Fit-Items"> 
        <div className="Full-Fit-Image">
          <img src={fitItems.fullFitUrl} alt="" />
        </div>
        <div className="Fit-Item-Wrapper">
          <div className="fit-image-hover-container">
            <img src={fitItems.imageUrl} alt="" className="fit-image-hover-image" />
            <div
              style={{ paddingBottom: "100px" }}
              className="fit-image-hover-overlay"
            >
              <img src={fitItems.imageUrl2} className="image-hover-image" alt="" />
              <p style={{ marginTop: "5px" }}>TACTICAL JOGGERS - LIGHT BLUE</p>
              <p className="Fit-Item-Wrapper-Price">78.95€</p>
            </div>
          </div>
          <p>TACTICAL VEST - LIGHT BLUE</p>
          <p className="Fit-Item-Wrapper-Price">49.95€</p>
          <button className="btn effect01" target="_blank">
            <span>VIEW THIS OUTFIT</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Fit;
