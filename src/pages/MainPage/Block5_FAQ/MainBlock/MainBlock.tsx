import React, { useState } from "react";
import style from "./style.module.css";
import Vector_block6_1 from "../../../../images/Vector_block6_1.png";
import Vector_block6_2 from "../../../../images/Vector_block6_2.png";

const MainBlock: React.FC = () => {
  const [visibleDescriptions, setVisibleDescriptions] = useState<boolean[]>(
    Array(8).fill(false)
  );

  const toggleDescription = (index: number) => {
    setVisibleDescriptions((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const [imageSrc, setImageSrc] = useState<string>(Vector_block6_1);
  const toggleImage = () => {
    setImageSrc((prevSrc) =>
      prevSrc === Vector_block6_1 ? Vector_block6_2 : Vector_block6_1
    );
  };

  return (
    <div className={style.container}>
      <div className={style.leftContainer}>
        <div className={style.block1_l}>
          <div className={style.info}>
            <span>WHAT TYPE OF PHOTOGRAPHY DO YOU SPECIALIZE IN?</span>
            <button
              className={style.btn}
              onClick={() => {
                toggleDescription(0);
                toggleImage();
              }}
            >
              <img className={style.icon} src={imageSrc} alt="icon" />
            </button>
          </div>
          {visibleDescriptions[0] && (
            <div className={style.description}>
              I specialize in [Portrait, Landscape, Event, etc.] photography,
              capturing moments that tell unique stories.
            </div>
          )}
        </div>
        <div className={style.block2_l}>
          <div className={style.info}>
            <span>HOW CAN I BOOK A PHOTOGRAPHY SESSION WITH YOU?</span>
            <button
              className={style.btn}
              onClick={() => {
                toggleDescription(1);
                toggleImage();
              }}
            >
              <img className={style.icon} src={imageSrc} alt="icon" />
            </button>
          </div>
          {visibleDescriptions[1] && (
            <div className={style.description}>
              I specialize in [Portrait, Landscape, Event, etc.] photography,
              capturing moments that tell unique stories.
            </div>
          )}
        </div>
        <div className={style.block3_l}>
          <div className={style.info}>
            <span>WHAT EQUIPMENT DO YOU USE FOR YOUR PHOTOGRAPHY?</span>
            <button
              className={style.btn}
              onClick={() => {
                toggleDescription(2);
                toggleImage();
              }}
            >
              <img className={style.icon} src={imageSrc} alt="icon" />
            </button>
          </div>
          {visibleDescriptions[2] && (
            <div className={style.description}>
              I specialize in [Portrait, Landscape, Event, etc.] photography,
              capturing moments that tell unique stories.
            </div>
          )}
        </div>
        <div className={style.block4_l}>
          <div className={style.info}>
            <span>CAN I REQUEST A SPECIFIC LOCATION FOR A</span>
            <button
              className={style.btn}
              onClick={() => {
                toggleDescription(3);
                toggleImage();
              }}
            >
              <img className={style.icon} src={imageSrc} alt="icon" />
            </button>
          </div>
          {visibleDescriptions[3] && (
            <div className={style.description}>
              I specialize in [Portrait, Landscape, Event, etc.] photography,
              capturing moments that tell unique stories.
            </div>
          )}
        </div>
      </div>
      <div className={style.rightContainer}>
        <div className={style.block1_r}>
          <div className={style.info}>
            <span>WHAT IS YOUR EDITING PROCESS LIKE?</span>
            <button
              className={style.btn}
              onClick={() => {
                toggleDescription(4);
                toggleImage();
              }}
            >
              <img className={style.icon} src={imageSrc} alt="icon" />
            </button>
          </div>
          {visibleDescriptions[4] && (
            <div className={style.description}>
              I specialize in [Portrait, Landscape, Event, etc.] photography,
              capturing moments that tell unique stories.
            </div>
          )}
        </div>
        <div className={style.block2_r}>
          <div className={style.info}>
            <span>
              ARE DIGITAL FILES INCLUDED IN YOUR PHOTOGRAPHY PACKAGES?
            </span>
            <button
              className={style.btn}
              onClick={() => {
                toggleDescription(5);
                toggleImage();
              }}
            >
              <img className={style.icon} src={imageSrc} alt="icon" />
            </button>
          </div>
          {visibleDescriptions[5] && (
            <div className={style.description}>
              I specialize in [Portrait, Landscape, Event, etc.] photography,
              capturing moments that tell unique stories.
            </div>
          )}
        </div>
        <div className={style.block3_r}>
          <div className={style.info}>
            <span>DO YOU OFFER PRINTS OF YOUR PHOTOGRAPHS?</span>
            <button
              className={style.btn}
              onClick={() => {
                toggleDescription(6);
                toggleImage();
              }}
            >
              <img className={style.icon} src={imageSrc} alt="icon" />
            </button>
          </div>
          {visibleDescriptions[6] && (
            <div className={style.description}>
              Yes, prints are available for purchase. Explore the 'Prints'
              section for more details on sizes and pricing.
            </div>
          )}
        </div>
        <div className={style.block4_r}>
          <div className={style.info}>
            <span>
              HOW LONG DOES IT TAKE TO RECEIVE THE EDITED PHOTOS AFTER A
              SESSION?
            </span>
            <button
              className={style.btn}
              onClick={() => {
                toggleDescription(7);
                toggleImage();
              }}
            >
              <img className={style.icon} src={imageSrc} alt="icon" />
            </button>
          </div>
          {visibleDescriptions[7] && (
            <div className={style.description}>
              I specialize in [Portrait, Landscape, Event, etc.] photography,
              capturing moments that tell unique stories.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
