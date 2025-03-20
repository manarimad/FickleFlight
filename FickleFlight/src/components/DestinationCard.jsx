import React from 'react';
import '../styles/destinationcard.css';

function DestinationCard({ name, image, price }) {
  return (
    <div className="destination-card card">
      <div className="card-image-container">
        <img src={image} alt={name} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        <div className="card-price">${price}</div>
      </div>
    </div>
  );
}

export default DestinationCard;