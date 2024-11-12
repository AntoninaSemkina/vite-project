import React from "react";
import style from "./style.module.css";
import btnLeft from "../../../../images/btnLeft.png";
import btnRight from "../../../../images/btnRight.png";

const HeadBlock: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.block1}>
        <div className={style.block1_el1}>FAQ'S</div>
        <div className={style.block1_el2}>FREQUENTLY ASKED QUESTIONS</div>
      </div>
    </div>
  );
};

export default HeadBlock;
