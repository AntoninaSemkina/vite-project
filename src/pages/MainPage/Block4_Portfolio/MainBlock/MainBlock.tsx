import React from "react";
import style from "./style.module.css";
import stroke_bl4 from "../../../../images/stroke_bl4.png";

interface Project {
  title: string;
  date: string;
  image: string;
}

interface MainBlockProps {
  projects: Project[];
}

const MainBlock: React.FC<MainBlockProps> = ({ projects }) => {
  return (
    <div className={style.container}>
      {projects.map((project, index) => (
        <div key={index} className={style.block1_main}>
          <div className={style.block1_img}>
            <img
              className={style.img}
              src={project.image}
              alt="portfolio_photo"
            />
          </div>
          <div className={style.block1_info}>
            <div className={style.block1_left}>
              <div className={style.block1_el1}>{project.title}</div>
              <div className={style.block1_el2}>{project.date}</div>
            </div>
            <div className={style.block1_right}>
              <button className={style.block1_btn}>
                <span>VIEW PROJECT</span>
                <img className={style.icon} src={stroke_bl4} alt="stroke" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainBlock;
