import React, { useState } from 'react';
import '../styles/newslettersubscription.css';
import subscribeImage from '../assets/Subscribe section background.png';

function NewsletterSubscription() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscription form submitted:', { name, email });
    setName('');
    setEmail('');
  };

  return (
    <div className="newsletter-subscription" style={{ backgroundImage: `url(${subscribeImage})` }}>
      <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
      <p>Get weekly updates</p>
      <div className="subscription-content">
        <form className="subscription-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Fill in your details to join the party!</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="input-field"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="input-field"
              required
            />
          </div>
          <button type="submit" className="subscribe-btn">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default NewsletterSubscription;