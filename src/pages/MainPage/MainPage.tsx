import React from "react";
import Header from "../../components/Header/Header";
import style from "./style.module.css";
import Block1_Head from "./Block1_Head/Block1_Head";

const MainPage = () => {
  return (
    <div className={style.container}>
      <Header />
      <Block1_Head />
      main page
    </div>
  );
};

export default MainPage;
