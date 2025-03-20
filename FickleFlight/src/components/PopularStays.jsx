import React from 'react';
import StayCard from './StayCard';
import '../styles/popularstays.css';

// Import images
import matterhornImage from '../assets/Matterhorn Suites Image.png';
import discoveryImage from '../assets/Discovery Shores Image.png';
import arcticImage from '../assets/Arctic Hut Image.png';
import lakeLouiseImage from '../assets/Lake Louise Image.png';

function PopularStays() {
  const stays = [
    {
      id: 1,
      name: 'Matterhorn Suites',
      features: 'Entire bungalow',
      image: matterhornImage,
      rating: 4.9,
      reviews: 60,
      price: '575',
    },
    {
      id: 2,
      name: 'Discovery Shores',
      features: '2-Story beachfront suite',
      image: discoveryImage,
      rating: 4.8,
      reviews: 116,
      price: '360',
    },
    {
      id: 3,
      name: 'Arctic Hut',
      features: 'Single deluxe hut',
      image: arcticImage,
      rating: 4.7,
      reviews: 78,
      price: '420',
    },
    {
      id: 4,
      name: 'Lake Louise Inn',
      features: 'Deluxe King Room',
      image: lakeLouiseImage,
      rating: 4.6,
      reviews: 63,
      price: '244',
    },
  ];

  return (
    <div className="popular-stays section-container">
      <div className="section-title">
        <h2>Popular Stays</h2>
        <a href="/stays">View all stays →</a>
      </div>
      <div className="stays-container cards-container">
        {stays.map((stay) => (
          <StayCard
            key={stay.id}
            name={stay.name}
            features={stay.features}
            image={stay.image}
            rating={stay.rating}
            reviews={stay.reviews}
            price={stay.price}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularStays;