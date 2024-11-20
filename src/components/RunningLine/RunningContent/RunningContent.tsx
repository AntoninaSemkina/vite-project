import React from "react";
import style from "./style.module.css";
import Vector from "../../../images/Vector.png";

const RunningContent: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.itemsMarquee}>
        {/* Дублирование для непрерывной прокрутки */}
        {[...Array(2)].map((_, index) => (
          <div key={index}>
            <span className={style.item}>
              <img className={style.img} src={Vector} alt="icon" />
              EVENT PHOTOGRAPHY
            </span>
            <span className={style.item}>
              <img className={style.img} src={Vector} alt="icon" />
              COMMERCIAL PHOTOGRAPHY
            </span>
            <span className={style.item}>
              <img className={style.img} src={Vector} alt="icon" />
              PRODUCT PHOTOGRAPHY
            </span>
            <span className={style.item}>
              <img className={style.img} src={Vector} alt="icon" />
              WEDDING PHOTOGRAPHY
            </span>
            <span className={style.item}>
              <img className={style.img} src={Vector} alt="icon" />
              LANDSCAPE PHOTOGRAPHY
            </span>
            <span className={style.item}>
              <img className={style.img} src={Vector} alt="icon" />
              BRANDING PHOTOGRAPHY
            </span>
            <span className={style.item}>
              <img className={style.img} src={Vector} alt="icon" />
              PORTRAIT PHOTOGRAPHY
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RunningContent;
