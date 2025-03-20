import React, { useState } from 'react';
import '../styles/searchbar.css';

function SearchBar() {
  const [tripType, setTripType] = useState('return'); 
  const [formData, setFormData] = useState({
    departure: '', 
    destination: '',
    departureDate: '',
    returnDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTripTypeChange = (type) => {
    setTripType(type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search submitted:', formData);
  };

  return (
    <div className="search-container">
      <h2 className="search-heading">SEARCH FLIGHTS</h2>
      
      <div className="trip-type-selector">
        <button
          className={`trip-btn ${tripType === 'one-way' ? 'active' : ''}`}
          onClick={() => handleTripTypeChange('one-way')}
        >
          One-Way
        </button>
        <button
          className={`trip-btn ${tripType === 'return' ? 'active' : ''}`}
          onClick={() => handleTripTypeChange('return')}
        >
          Return
        </button>
      </div>

      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Departure</label>
          <input 
            type="text" 
            name="departure" 
            value={formData.departure} 
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Arrival</label>
          <input 
            type="text" 
            name="destination" 
            value={formData.destination} 
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Depart Date</label>
          <input 
            type="date" 
            name="departureDate" 
            value={formData.departureDate} 
            onChange={handleChange}
          />
        </div>

        {tripType === 'return' && (
          <div className="form-group">
            <label>Return Date</label>
            <input 
              type="date" 
              name="returnDate" 
              value={formData.returnDate} 
              onChange={handleChange}
            />
          </div>
        )}

        <button type="submit" className="search-btn">SEARCH FLIGHTS</button>
      </form>
    </div>
  );
}

export default SearchBar;