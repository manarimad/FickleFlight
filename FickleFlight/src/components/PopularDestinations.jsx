import React from 'react';
import DestinationCard from './DestinationCard';
import '../styles/populardestinations.css';

// Import images
import parisImage from '../assets/ParisImage.png';
import greeceImage from '../assets/GreeceImage.png';
import norwayImage from '../assets/NorwayImage.png';
import tuscanyImage from '../assets/TuscanyImage.png';

function PopularDestinations() {
  const destinations = [
    { id: 1, name: 'Paris', image: parisImage, price: '699' },
    { id: 2, name: 'Greece', image: greeceImage, price: '1079' },
    { id: 3, name: 'Norway', image: norwayImage, price: '895' },
    { id: 4, name: 'Tuscany', image: tuscanyImage, price: '1245' },
  ];

  return (
    <div className="popular-destinations section-container">
      <div className="section-title">
        <h2>Most Popular Destinations</h2>
        <a href="/destinations">View all destinations →</a>
      </div>
      <div className="destinations-container cards-container">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            name={destination.name}
            image={destination.image}
            price={destination.price}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularDestinations;