import React from "react";
import style from "./style.module.css";
import RunningLine from "../Block1_Head/RunningLine/RunningLine";

const Block1_Head = () => {
  return (
    <div className={style.container}>
      <RunningLine />
    </div>
  );
};

export default Block1_Head;
