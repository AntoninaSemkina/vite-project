import React from "react";
import style from "./style.module.css";
import Icon_facebook from "../../../../images/Icon_facebook.png";
import Icon_twitter from "../../../../images/Icon_twitter.png";
import Icon_linkedin from "../../../../images/Icon_linkedin.png";
import Star5 from "../../../../../src/components/EvaluationStars/Star5/Star5";
import SocialMedia from "../../../../components/SocialMedia/SocialMedia";

const MainBlock: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.block1_main}>
        <div className={style.block1_box1}>
          <div className={style.box1_el1}>
            <div className={style.box1_el2}>Emily Johnson</div>
            <div className={style.box1_el3}>USA, California</div>
          </div>
          <div className={style.box1_el2}>
            <SocialMedia />
          </div>
        </div>
        <div className={style.block1_box2}>
          <Star5 />
        </div>
        <div className={style.block1_box3}>
          <span>
            Damien's photography doesn't just capture moments; it captures
            emotions. Hes work is simply mesmerizing.
          </span>
        </div>
      </div>
      <div className={style.block2_main}>
        <div className={style.block2_box1}>
          <div className={style.box1_el1}>
            <div className={style.box1_el2}>John Smith</div>
            <div className={style.box1_el3}>USA, California</div>
          </div>
          <div className={style.box1_el2}>
            <SocialMedia />
          </div>
        </div>
        <div className={style.block2_box2}>
          <Star5 />
        </div>
        <div className={style.block1_box3}>
          <span>
            Damien has an incredible talent for making every event feel
            effortless, and the results speak for themselves.
          </span>
        </div>
      </div>
      <div className={style.block3_main}>
        <div className={style.block3_box1}>
          <div className={style.box1_el1}>
            <div className={style.box1_el2}>Samantha Davis</div>
            <div className={style.box1_el3}>USA, California</div>
          </div>
          <div className={style.box1_el2}>
            <SocialMedia />
          </div>
        </div>
        <div className={style.block3_box2}>
          <Star5 />
        </div>
        <div className={style.block1_box3}>
          <span>
            I was blown away by Damien's ability to capture the essence of our
            wedding day. Hes photographs are our cherished memories.
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
