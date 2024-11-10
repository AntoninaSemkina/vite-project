import React from "react";
import style from "./style.module.css";
import Vector from "../../../../images/Vector.png";

const RunningLine: React.FC = () => {
  return (
    <div className={style.container}>
      <div className="page-head__ticker">
        <p className="msg">
          <span>
            <img className={style.img} src={Vector} alt="" />
            EVENT PHOTOGRAPHY
          </span>
          <span>
            <img className={style.img} src={Vector} alt="" />
            COMMERCIAL PHOTOGRAPHY
          </span>
          <span>
            <img className={style.img} src={Vector} alt="" />
            PRODUCT PHOTOGRAPHY
          </span>
          <span>
            <img className={style.img} src={Vector} alt="" />
            WEDDING PHOTOGRAPHY
          </span>
          <span>
            <img className={style.img} src={Vector} alt="" />
            LANDSCAPE PHOTOGRAPHY
          </span>
          <span>
            <img className={style.img} src={Vector} alt="" />
            BRANDING PHOTOGRAPHY
          </span>
          <span>
            <img className={style.img} src={Vector} alt="" />
            PORTRAIT PHOTOGRAPHY
          </span>
        </p>
      </div>
    </div>
  );
};

export default RunningLine;
