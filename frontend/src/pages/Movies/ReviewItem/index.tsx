import { Review } from "core/models/Review";
import "./styles.css";
import {  ReactComponent as Star } from "core/assets/img/star.svg";

type Props = {
  review: Review;
}

const ReviewItem = ({ review }: Props) => {
  return (
    <div className="review-list-container">
      <div className="review-owner">
       <Star className="review-star-icon"/> <h3>{review.user.name}</h3>
      </div>
      <div className="review-content">
        <p>{review.text}</p>
      </div>
    </div>
  )
}

export default ReviewItem
