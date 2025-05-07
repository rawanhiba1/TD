import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Services.css';

function Services() {
  const services = [
    {
      id: 'organizing',
      title: 'Event Organizing',
      description: 'Transform your special occasions into unforgettable experiences. We handle everything from concept development to final execution.',
      features: [
        'Event Planning & Coordination',
        'Venue Selection & Management',
        'Catering & Menu Planning',
        'Entertainment & Activities',
        'Decoration & Theming'
      ]
    },
    {
      id: 'technical',
      title: 'Technical Services',
      description: 'Elevate your event with our comprehensive technical services, ensuring that every moment is perfectly captured and presented.',
      features: [
        'Sound & Lighting Systems',
        'Audio-Visual Equipment',
        'Stage Setup & Management',
        'Technical Support',
        'Live Streaming'
      ]
    },
    {
      id: 'staffing',
      title: 'Event Staffing',
      description: 'Our dedicated event staffing solutions guarantee exceptional service for every guest, making your event run smoothly.',
      features: [
        'Professional Event Staff',
        'Security Personnel',
        'Catering Staff',
        'Technical Support Team',
        'Guest Services'
      ]
    }
  ];

  return (
    <div className="services-page">
      <div className="services-hero">
        <h1>Our Services</h1>
        <p>Comprehensive Event Management Solutions</p>
      </div>

      <div className="services-content">
        {services.map((service) => (
          <section key={service.id} id={service.id} className="service-section">
            <h2>{service.title}</h2>
            <p className="service-description">{service.description}</p>
            <div className="features-list">
              {service.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Link to="/contact" className="service-cta">
              Get Started
            </Link>
          </section>
        ))}
      </div>

      <section className="cta-section">
        <h2>Ready to Plan Your Event?</h2>
        <p>Contact us today to discuss your event requirements</p>
        <Link to="/contact" className="cta-button">
          Contact Us
        </Link>
      </section>
    </div>
  );
}

export default Services; 