import React from 'react';
import '../styles/trippreparation.css';

function TripPreparation() {
  const prepItems = [
    { id: 1, icon: '🏨', title: 'Hotel', color: '#f87171' },
    { id: 2, icon: '🍽️', title: 'Attractions', color: '#fb923c' },
    { id: 3, icon: '🍽️', title: 'Eats', color: '#34d399' },
    { id: 4, icon: '🚍', title: 'Commute', color: '#fbbf24' },
    { id: 5, icon: '🚕', title: 'Taxi', color: '#60a5fa' },
    { id: 6, icon: '🎥', title: 'Movies', color: '#34d399' },
  ];

  return (
    <div className="trip-preparation section-container">
      <h3>PREPARE FOR YOUR TRIP</h3>
      <div className="prep-items">
        {prepItems.map((item) => (
          <div key={item.id} className="prep-item" style={{ backgroundColor: item.color }}>
            <div className="prep-icon">{item.icon}</div>
            <div className="prep-title">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TripPreparation;
