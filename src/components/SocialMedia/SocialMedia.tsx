import React from "react";
import style from "./style.module.css";
import Icon_facebook from "../../images/Icon_facebook.png";
import Icon_twitter from "../../images/Icon_twitter.png";
import Icon_linkedin from "../../images/Icon_linkedin.png";

const SocialMedia: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.block1}>
        <button className={style.btn_social}>
          <img
            className={style.icon_social}
            src={Icon_facebook}
            alt="Facebook"
          />
        </button>
        <button className={style.btn_social}>
          <img className={style.icon_social} src={Icon_twitter} alt="twitter" />
        </button>
        <button className={style.btn_social}>
          <img
            className={style.icon_social}
            src={Icon_linkedin}
            alt="linkedin"
          />
        </button>
      </div>
    </div>
  );
};

export default SocialMedia;
