import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Home.css';

const heroImages = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg',
];

const events = [
  {
    date: '05 June',
    title: 'LOREM IPSUM DOLOR',
    subtitle: 'SIT AMET CONSECTETUR',
    image: '/images/event1.jpg',
  },
  {
    date: '12 June',
    title: 'LOREM IPSUM DOLOR',
    subtitle: 'SIT AMET CONSECTETUR',
    image: '/images/event2.jpg',
  },
  {
    date: '23 June',
    title: 'LOREM IPSUM DOLOR',
    subtitle: 'SIT AMET CONSECTETUR',
    image: '/images/event3.jpg',
  },
];

function Home() {
  const sectionsRef = useRef([]);
  const cardsRef = useRef([]);
  const [current, setCurrent] = useState(0);
  const [heroIndex, setHeroIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  // Hero slideshow auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextHero = () => setHeroIndex((prev) => (prev + 1) % heroImages.length);
  const prevHero = () => setHeroIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const services = [
    {
      title: 'Event Planning',
      description: 'Professional planning for all types of events, from concept to execution.',
      icon: '🗓️'
    },
    {
      title: 'Event Staffing',
      description: 'Expert staff to ensure your event runs smoothly and efficiently.',
      icon: '👥'
    },
    {
      title: 'Parties & Event Organising',
      description: 'Creative and seamless organisation for parties, celebrations, and special occasions.',
      icon: '🎉'
    },
    // Additional services for expansion
    {
      title: 'Software Applications',
      description: 'Custom event management software and digital solutions for seamless operations.',
      icon: '💻'
    },
    {
      title: 'Media & Marketing Strategies',
      description: 'Comprehensive media coverage and marketing strategies to boost your event\'s reach.',
      icon: '📣'
    }
  ];

  const categories = [
    'Music', 'Nightlife', 'Holidays', 'Visual Arts',
    'Health', 'Hobbies', 'Business', 'Food & Drink'
  ];

  const nextSlide = () => setCurrent((prev) => (prev + 1) % events.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + events.length) % events.length);

  return (
    <div className="home">
      {/* Hero Section with Slideshow */}
      <section className="hero-image-section">
        <div className="hero-slideshow">
          {heroImages.map((src, idx) => (
            <div
              key={src}
              className={`hero-slide${heroIndex === idx ? ' active' : ''}`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
          <button className="slider-arrow left hero-arrow" onClick={prevHero}>&lt;</button>
          <button className="slider-arrow right hero-arrow" onClick={nextHero}>&gt;</button>
        </div>
        <div className="hero-overlay-bg" />
        <div className="hero-center-content">
          <h1 className="hero-title">Welcome to Trivoly Dome!</h1>
          <p className="hero-subtitle">Welcome to your trusted partner for remarkable events in the UAE. From large celebrations to intimate gatherings, we offer comprehensive event management and staffing services to bring your vision to life with creativity and attention to detail.</p>
          <Link to="/services" className="hero-btn">OUR SERVICES</Link>
        </div>
      </section>

      {/* Coming Soon Event Slider */}
      <section className="coming-soon-section">
        <h2 className="coming-soon-title">COMING SOON</h2>
        <div className="event-slider">
          <button className="slider-arrow left" onClick={prevSlide}>&lt;</button>
          <div className="event-cards">
            {events.map((event, idx) => (
              <div key={idx} className={`event-card${idx === current ? ' active' : ''}`}> 
                <div className="event-card-img" style={{ backgroundImage: `url(${event.image})` }} />
                <div className="event-card-date">{event.date}</div>
                <div className="event-card-title">{event.title}</div>
                <div className="event-card-subtitle">{event.subtitle}</div>
              </div>
            ))}
          </div>
          <button className="slider-arrow right" onClick={nextSlide}>&gt;</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" ref={(el) => (sectionsRef.current[1] = el)}>
        <h2>Our Services</h2>
        <div className={`services-grid ${showMore ? 'expanded' : 'collapsed'}`}>
          {services.slice(0, showMore ? services.length : 3).map((service, index) => (
            <div
              key={index}
              className="service-card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button className="view-more-btn" onClick={() => setShowMore((v) => !v)}>
            {showMore ? 'View Less' : 'View More'}
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories" ref={(el) => (sectionsRef.current[2] = el)}>
        <h2>Event Categories</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div
              key={index}
              className="category-card"
              ref={(el) => (cardsRef.current[index + services.length] = el)}
            >
              <h3>{category}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience" ref={(el) => (sectionsRef.current[3] = el)}>
        <div className="experience-content">
          <h2>Experience</h2>
          <p>With years of industry expertise, we understand the intricacies of event planning and execution. Our diverse portfolio spans a wide range of events, equipping us to navigate challenges and deliver seamless experiences.</p>
        </div>
      </section>
    </div>
  );
}

export default Home; 