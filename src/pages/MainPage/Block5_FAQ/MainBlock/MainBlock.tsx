import React, { useState } from "react";
import style from "./style.module.css";
import Vector_block6_1 from "../../../../images/Vector_block6_1.png";
import Vector_block6_2 from "../../../../images/Vector_block6_2.png";

interface Question {
  question: string;
  answer: string;
}

interface MainBlockProps {
  questions: Question[];
}

const MainBlock: React.FC<MainBlockProps> = ({ questions }) => {
  const [visibleDescriptions, setVisibleDescriptions] = useState<boolean[]>(
    Array(questions.length).fill(false)
  );
  const [imageSrc, setImageSrc] = useState<string>(Vector_block6_2);

  const toggleDescription = (index: number) => {
    setVisibleDescriptions((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
    toggleImage();
  };

  const toggleImage = () => {
    setImageSrc((prevSrc) =>
      prevSrc === Vector_block6_2 ? Vector_block6_1 : Vector_block6_2
    );
  };

  return (
    <div className={style.container}>
      <div className={style.leftContainer}>
        {questions.slice(0, 4).map((item, index) => (
          <div key={index} className={style.block}>
            <div className={style.info}>
              <span>{item.question}</span>
              <button
                className={style.btn}
                onClick={() => toggleDescription(index)}
              >
                <img className={style.icon} src={imageSrc} alt="icon" />
              </button>
            </div>
            {visibleDescriptions[index] && (
              <div className={style.description}>{item.answer}</div>
            )}
          </div>
        ))}
      </div>
      <div className={style.rightContainer}>
        {questions.slice(4).map((item, index) => (
          <div key={index + 4} className={style.block}>
            <div className={style.info}>
              <span>{item.question}</span>
              <button
                className={style.btn}
                onClick={() => toggleDescription(index + 4)}
              >
                <img className={style.icon} src={imageSrc} alt="icon" />
              </button>
            </div>
            {visibleDescriptions[index + 4] && (
              <div className={style.description}>{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainBlock;
