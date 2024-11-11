import React from "react";
import style from "./style.module.css";
import Vector from "../../../../../images/Vector.png";

// const RunningContent: React.FC = () => {
//   return (
//     <div className={style.container}>
//       <div className={style.itemsMarquee}>
//         <span className={style.item}>
//           <img className={style.img} src={Vector} alt="" />
//           EVENT PHOTOGRAPHY
//         </span>
//         <span className={style.item}>
//           <img className={style.img} src={Vector} alt="" />
//           COMMERCIAL PHOTOGRAPHY
//         </span>
//         <span className={style.item}>
//           <img className={style.img} src={Vector} alt="" />
//           PRODUCT PHOTOGRAPHY
//         </span>
//         <span className={style.item}>
//           <img className={style.img} src={Vector} alt="" />
//           WEDDING PHOTOGRAPHY
//         </span>
//         <span className={style.item}>
//           <img className={style.img} src={Vector} alt="" />
//           LANDSCAPE PHOTOGRAPHY
//         </span>
//         <span className={style.item}>
//           <img className={style.img} src={Vector} alt="" />
//           BRANDING PHOTOGRAPHY
//         </span>
//         <span className={style.item}>
//           <img className={style.img} src={Vector} alt="" />
//           PORTRAIT PHOTOGRAPHY
//         </span>
//       </div>
//     </div>
//   );
// };

// export default RunningContent;

const RunningContent: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.itemsMarquee}>
        {/* Дублирование для непрерывной прокрутки */}
        {[...Array(2)].map((_, index) => (
          <div key={index}>
            <span className={style.item}>
              <img className={style.img} src={Vector} alt="" />
              EVENT PHOTOGRAPHY
            </span>
            <span className={style.item}>
              <img className={style.img} src={Vector} alt="" />
              COMMERCIAL PHOTOGRAPHY
            </span>
            <span className={style.item}>
              <img className={style.img} src={Vector} alt="" />
              PRODUCT PHOTOGRAPHY
            </span>
            <span className={style.item}>
              <img className={style.img} src={Vector} alt="" />
              WEDDING PHOTOGRAPHY
            </span>
            <span className={style.item}>
              <img className={style.img} src={Vector} alt="" />
              LANDSCAPE PHOTOGRAPHY
            </span>
            <span className={style.item}>
              <img className={style.img} src={Vector} alt="" />
              BRANDING PHOTOGRAPHY
            </span>
            <span className={style.item}>
              <img className={style.img} src={Vector} alt="" />
              PORTRAIT PHOTOGRAPHY
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RunningContent;
