import React from "react";
import style from "./style.module.css";
import Star5 from "../../../../../../src/components/EvaluationStars/Star5/Star5";
import SocialMedia from "../../../../../components/SocialMedia/SocialMedia";

interface ReviewBlockProps {
  name: string;
  location: string;
  review: string;
}

const ReviewBlock: React.FC<ReviewBlockProps> = ({
  name,
  location,
  review,
}) => {
  return (
    <div className={style.container}>
      <div className={style.box1}>
        <div className={style.box1_el1}>
          <div className={style.name}>{name}</div>
          <div className={style.location}>{location}</div>
        </div>
        <div className={style.box1_el2}>
          <div className={style.socialMedia}>
            <SocialMedia />
          </div>
        </div>
      </div>
      <div className={style.stars}>
        <Star5 />
      </div>
      <div className={style.reviewText}>
        <span>{review}</span>
      </div>
    </div>
  );
};

export default ReviewBlock;
