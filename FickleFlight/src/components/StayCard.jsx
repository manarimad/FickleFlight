import React from 'react';
import '../styles/staycard.css';

function StayCard({ name, features, image, rating, reviews, price }) {
  return (
    <div className="stay-card card">
      <div className="card-image-container">
        <img src={image} alt={name} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        <p className="card-subtitle">{features}</p>
        <div className="card-rating">
          <span className="rating-stars">{'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}</span>
          <span className="rating-score">{rating}</span>
          <span className="rating-reviews">({reviews} reviews)</span>
        </div>
        <div className="card-price">${price}/night</div>
      </div>
    </div>
  );
}

export default StayCard;