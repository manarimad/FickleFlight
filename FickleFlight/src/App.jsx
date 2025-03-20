import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import RecentSearches from './components/RecentSearches';
import TripPreparation from './components/TripPreparation';
import PopularDestinations from './components/PopularDestinations';
import RecommendedHolidays from './components/RecommendedHolidays';
import PopularStays from './components/PopularStays';
import NewsletterSubscription from './components/NewsletterSubscription';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main className="main-content">
        <RecentSearches />
        <TripPreparation />
        <PopularDestinations />
        <RecommendedHolidays />
        <PopularStays />
        <NewsletterSubscription />
      </main>
      <Footer />
    </div>
  );
}

export default App;