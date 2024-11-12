import React from "react";
import style from "./style.module.css";
import MainBlock from "./MainBlock/MainBlock";
import HeadBlock from "./HeadBlock/HeadBlock";

const Block4_Portfolio: React.FC = () => {
  return (
    <div className={style.container}>
      <HeadBlock />
      <MainBlock />
    </div>
  );
};

export default Block4_Portfolio;
