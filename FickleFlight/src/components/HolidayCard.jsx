import React from 'react';
import '../styles/holidaycard.css';

function HolidayCard({ name, image, days, nights, price }) {
  return (
    <div className="holiday-card card">
      <div className="card-image-container">
        <img src={image} alt={name} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        <div className="card-subtitle-container">
        <p className="card-subtitle">{days}D</p>
        <p className="card-subtitle">{nights}N</p>
        </div>
        <div className="card-price">${price}</div>
      </div>
    </div>
  );
}

export default HolidayCard;