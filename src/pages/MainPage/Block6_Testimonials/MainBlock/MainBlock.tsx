import React from "react";
import style from "./style.module.css";
import ReviewBlock from "./ReviewBlock/ReviewBlock";

const MainBlock: React.FC = () => {
  return (
    <div className={style.container}>
      <ReviewBlock
        name="Emily Johnson"
        location="USA, California"
        review="Damien's photography doesn't just capture moments; it captures emotions. His work is simply mesmerizing."
      />
      <ReviewBlock
        name="John Smith"
        location="USA, California"
        review="Damien has an incredible talent for making every event feel effortless, and the results speak for themselves."
      />
      <ReviewBlock
        name="Samantha Davis"
        location="USA, California"
        review="I was blown away by Damien's ability to capture the essence of our wedding day. His photographs are our cherished memories."
      />
    </div>
  );
};

export default MainBlock;
