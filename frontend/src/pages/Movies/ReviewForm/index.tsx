import './styles.css';

import Button from 'core/components/Button';
import React, { useEffect, useState } from 'react';

type Props = {
  handleInputReview: (input: string) => void;
}

const ReviewForm = ({ handleInputReview }: Props) => {

  const [inputReview, setInputReview] = useState("");

  const handleClick = () => {
    handleInputReview(inputReview);
    setInputReview("");
  };

  return (
    <div className="review-form card-container-shadow">
      <input
        type="text"
        placeholder="Deixe sua avaliação aqui"
        className="review-form-input"
        onChange={e => setInputReview(e.target.value)}
        value={inputReview}
      />
      <Button label="salvar avaliação" onClick={handleClick} />
    </div>
  )
}

export default ReviewForm
