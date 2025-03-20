import React from 'react';
import HolidayCard from './HolidayCard';
import '../styles/recommendedholidays.css';

// Import images
import baliImage from '../assets/Bali.png';
import switzerlandImage from '../assets/SwitzerlandImage.png';
import boracayImage from '../assets/BoracayImage.png';
import palawanImage from '../assets/PalawanImage.png';

function RecommendedHolidays() {
  const holidays = [
    { id: 1, name: 'Bali', days: '4', nights: '3', image: baliImage, price: '899' },
    { id: 2, name: 'Switzerland', days: '6', nights: '5', image: switzerlandImage, price: '900' },
    { id: 3, name: 'Boracay', days: '5', nights: '4', image: boracayImage, price: '699' },
    { id: 4, name: 'Palawan', days: '4', nights: '3', image: palawanImage, price: '789' },
  ];

  return (
    <div className="recommended-holidays section-container">
      <div className="section-title">
        <h2>Recommended Holidays</h2>
        <a href="/holidays">View all holidays →</a>
      </div>
      <div className="holidays-container cards-container">
        {holidays.map((holiday) => (
          <HolidayCard
            key={holiday.id}
            name={holiday.name}
            days={holiday.days}
            nights={holiday.nights}
            image={holiday.image}
            price={holiday.price}
          />
        ))}
      </div>
    </div>
  );
}

export default RecommendedHolidays;