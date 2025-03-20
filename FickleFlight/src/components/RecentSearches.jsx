import React from 'react';
import '../styles/recentsearches.css';

function RecentSearches() {
  const recentSearches = [
    { id: 1, from: 'SIN', to: 'LAX', date: 'Depart 7 Sep | Return 12 Sep 2021' },
    { id: 2, from: 'MY', to: 'DUB', date: 'Depart 9 Sep | Return 14 Sep 2021' },
  ];

  return (
    <div className="recent-searches section-container">
      <h2>RECENT SEARCHES</h2>
      <div className="searches-container">
        {recentSearches.map((search) => (
          <div key={search.id} className="search-item">
            <div className="search-locations">
              <div className="location">{search.from}</div>
              <div className="direction-icon">
                <i className="fas fa-plane"></i>
              </div>
              <div className="location">{search.to}</div>
            </div>
            <div className="search-date">{search.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentSearches;