import React from "react";
import style from "./style.module.css";
import portfolio_1 from "../../../../images/portfolio_1.png";
import portfolio_2 from "../../../../images/portfolio_2.png";
import portfolio_3 from "../../../../images/portfolio_3.png";
import stroke_bl4 from "../../../../images/stroke_bl4.png";

const MainBlock: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.block1_main}>
        <div className={style.block1_img}>
          <img className={style.img} src={portfolio_1} alt="portfolio_photo" />
        </div>
        <div className={style.block1_info}>
          <div className={style.block1_left}>
            <div className={style.block1_el1}>Faces of Resilience</div>
            <div className={style.block1_el2}>March 2022</div>
          </div>
          <div className={style.block1_right}>
            <button className={style.block1_btn}>
              <span>VIEW PROJECT</span>
              <img className={style.icon} src={stroke_bl4} alt="stroke" />
            </button>
          </div>
        </div>
      </div>
      <div className={style.block1_main}>
        <div className={style.block1_img}>
          <img className={style.img} src={portfolio_2} alt="portfolio_photo" />
        </div>
        <div className={style.block1_info}>
          <div className={style.block1_left}>
            <div className={style.block1_el1}>A Wedding Tale</div>
            <div className={style.block1_el2}>January 2020</div>
          </div>
          <div className={style.block1_right}>
            <button className={style.block1_btn}>
              <span>VIEW PROJECT</span>
              <img className={style.icon} src={stroke_bl4} alt="stroke" />
            </button>
          </div>
        </div>
      </div>
      <div className={style.block1_main}>
        <div className={style.block1_img}>
          <img className={style.img} src={portfolio_3} alt="portfolio_photo" />
        </div>
        <div className={style.block1_info}>
          <div className={style.block1_left}>
            <div className={style.block1_el1}>Product Elegance</div>
            <div className={style.block1_el2}>January 2020</div>
          </div>
          <div className={style.block1_right}>
            <button className={style.block1_btn}>
              <span>VIEW PROJECT</span>
              <img className={style.icon} src={stroke_bl4} alt="stroke" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
