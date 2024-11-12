import React from "react";
import style from "./style.module.css";
import MainBlock from "./MainBlock/MainBlock";
import HeadBlock from "./HeadBlock/HeadBlock";

const Block5_FAQ: React.FC = () => {
  return (
    <div className={style.container}>
      <HeadBlock />
      <MainBlock />
    </div>
  );
};

export default Block5_FAQ;
