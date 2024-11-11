import React from "react";
import Header from "../../components/Header/Header";
import style from "./style.module.css";
import Block1_Head from "./Block1_Head/Block1_Head";
import Block2_About from "./Block2_About/Block2_About";

const MainPage: React.FC = () => {
  return (
    <div className={style.container}>
      <Header />
      <Block1_Head />
      <Block2_About />
      {/* <Block3_Services /> */}
      {/* <Block4_Portfolio /> */}
      {/* <Block5_FAQ /> */}
      {/* <Block6_Testimonials /> */}
      {/* <Footer/> */}
    </div>
  );
};

export default MainPage;
