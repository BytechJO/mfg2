import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './StarRating.css';

const Star = ({ marked, starId, onClick, onMouseOver }) => (
  <span data-star-id={starId} className="star" role="button" onClick={onClick} onMouseOver={onMouseOver}>
    <FaStar color={marked ? '#f1607e' : '#fff'} />
  </span>
);

const StarRating = ({ value, onChange }) => {
  const [rating, setRating] = useState(parseInt(value) || 0);
  const [selection, setSelection] = useState(0);

  const handleMouseOver = (e) => {
    const starId = e.currentTarget.dataset.starId;
    if (starId) setSelection(parseInt(starId));
  };

  const handleMouseLeave = () => setSelection(0);

  const handleClick = (e) => {
    const starId = e.currentTarget.dataset.starId;
    if (starId) {
      setRating(parseInt(starId));
      onChange?.(parseInt(starId));
    }
  };

  return (
    <div className="star-rating-container" onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={`star_${i + 1}`}
          starId={i + 1}
          marked={selection ? selection >= i + 1 : rating >= i + 1}
          onClick={handleClick}
          onMouseOver={handleMouseOver}
        />
      ))}
    </div>
  );
};

export default StarRating;
