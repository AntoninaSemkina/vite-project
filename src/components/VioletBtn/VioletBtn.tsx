import React from "react";
import style from "./style.module.css";
import Stroke from "../../images/Stroke.png";

const VioletBtn: React.FC = () => {
  return (
    <div className={style.container}>
      <button className={style.btn}>
        <img className={style.img} src={Stroke} alt="" />
      </button>
    </div>
  );
};

export default VioletBtn;
