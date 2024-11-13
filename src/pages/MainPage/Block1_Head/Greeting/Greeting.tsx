import React from "react";
import style from "./style.module.css";
import GreetingIMG from "../../../../images/GreetingIMG.png";
import Stroke from "../../../../images/Stroke.png";
import VioletBtn from "../../../../components/VioletBtn/VioletBtn";

const Greeting = () => {
  return (
    <div className={style.container}>
      <div className={style.block1}>
        <div className={style.block1_el1}>STUNNING PHOTOGRAPHY BY</div>
        <div className={style.block1_el2}>DAMIEN BRAUN</div>
      </div>
      <div className={style.block2}>
        <img
          className={style.block2_el1}
          src={GreetingIMG}
          alt="rectangle"
          width="20%"
        />
      </div>
      <div className={style.block3}>
        <div className={style.block3_el}>
          <div className={style.block3_el1}>LET'S</div>
          <VioletBtn />
        </div>
        <div className={style.block3_el3}>WORK TOGETHER</div>
      </div>
    </div>
  );
};

export default Greeting;
