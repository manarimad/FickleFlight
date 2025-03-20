import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <a href="/">FickleFlight</a>
          <p>Fickle Flight is your one-stop travel portal. We offer hassle free flight and
          hotel bookings. We also have all your flight needs in you online shop.</p>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-links">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/blog">News</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/blog">How we work</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li><a href="/contact">Account</a></li>
              <li><a href="/legal">Support Center</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/faq">Accessibility</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>More</h3>
            <ul>
              <li><a href="/airlines">Covid Advisory</a></li>
              <li><a href="/hotel">Airline Fees</a></li>
              <li><a href="/airfees">Tips</a></li>
              <li><a href="/destinations">Quarantine Rules</a></li>
            </ul>
          </div>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;