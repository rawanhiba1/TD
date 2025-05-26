import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Home.css';

const heroVideos = [
  {
    type: 'video',
    src: '/videos/wall of Light Moving Stage Glow No Copyright Free Motion Graphics Background Video Loop - Light Show.mp4',
    poster: '/images/hero1.jpg'
  }
];

const events = [
  {
    date: '05 June',
    title: 'LOREM IPSUM DOLOR',
    subtitle: 'SIT AMET CONSECTETUR',
    image: '/images/event1.jpg',
    video: '/videos/event1.mp4'
  },
  {
    date: '12 June',
    title: 'LOREM IPSUM DOLOR',
    subtitle: 'SIT AMET CONSECTETUR',
    image: '/images/event2.jpg',
    video: '/videos/event2.mp4'
  },
  {
    date: '23 June',
    title: 'LOREM IPSUM DOLOR',
    subtitle: 'SIT AMET CONSECTETUR',
    image: '/images/event3.jpg',
    video: '/videos/event3.mp4'
  },
];

function interpolateColor(color1, color2, factor) {
  // color1 and color2 are [r, g, b]
  return color1.map((c, i) => Math.round(c + (color2[i] - c) * factor));
}

function rgbToString([r, g, b]) {
  return `rgb(${r}, ${g}, ${b})`;
}

const COLOR_TOP = [255, 36, 85]; // #FF2455 (start color)
const COLOR_BOTTOM = [0, 0, 0];  // #000000 (end color)

function Home() {
  const sectionsRef = useRef([]);
  const cardsRef = useRef([]);
  const nextSectionRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [heroIndex, setHeroIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const videoRefs = useRef([]);
  const [menuOpen, setMenuOpen] = useState(false);

  // Hero slideshow auto-advance
  useEffect(() => {
    // Auto-advance removed since we only have one video
  }, []);

  // Handle video playback
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.play().catch(error => {
          console.log("Video autoplay failed:", error);
        });
      }
    });
  }, []);

  const nextHero = () => setHeroIndex((prev) => (prev + 1) % heroVideos.length);
  const prevHero = () => setHeroIndex((prev) => (prev - 1 + heroVideos.length) % heroVideos.length);

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

  useEffect(() => {
    const handleScroll = () => {
      if (!nextSectionRef.current) return;
      const section = nextSectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      const sectionTop = rect.top + window.scrollY;
      const sectionBottom = sectionTop + sectionHeight;
      const scrollY = window.scrollY + windowHeight / 2; // Use center of viewport

      let percent = 0;
      if (scrollY < sectionTop) {
        percent = 0;
      } else if (scrollY > sectionBottom) {
        percent = 1;
      } else {
        percent = (scrollY - sectionTop) / sectionHeight;
      }
      percent = Math.max(0, Math.min(1, percent));
      // Interpolate from black to red
      const colorStart = [0, 0, 0]; // black
      const colorEnd = [255, 36, 85]; // red
      const bgColor = colorStart.map((c, i) => Math.round(c + (colorEnd[i] - c) * percent));
      section.style.backgroundColor = `rgb(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]})`;
    };
    window.addEventListener('scroll', handleScroll);
    if (nextSectionRef.current) {
      nextSectionRef.current.style.backgroundColor = 'rgb(0,0,0)';
    }
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (nextSectionRef.current) {
        nextSectionRef.current.style.backgroundColor = '';
      }
    };
  }, []);

  const services = [
    {
      title: 'Creative',
      description: 'We think experience-first, building brands through shared experiences that activate human connections.',
      icon: '🎨',
      video: '/videos/creative.mp4'
    },
    {
      title: 'Content',
      description: 'Engaging content that tells your story and connects with your audience on a deeper level.',
      icon: '📝',
      video: '/videos/content.mp4'
    },
    {
      title: 'Environment',
      description: 'Creating immersive environments that transform spaces into memorable experiences.',
      icon: '🌍',
      video: '/videos/environment.mp4'
    },
    {
      title: 'Experiences',
      description: 'Crafting unique experiences that leave lasting impressions and build meaningful connections.',
      icon: '✨',
      video: '/videos/experiences.mp4'
    }
  ];

  const nextSlide = () => setCurrent((prev) => (prev + 1) % events.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + events.length) % events.length);

  return (
    <div className="home">
      {/* Hamburger Menu Button */}
      <button className="hamburger-menu" onClick={() => setMenuOpen(true)} aria-label="Open menu">
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>
      {/* Fullscreen Menu Overlay */}
      {menuOpen && (
        <div className="menu-overlay">
          <button className="close-menu" onClick={() => setMenuOpen(false)} aria-label="Close menu">&times;</button>
          <div className="menu-grid">
            <div className="menu-heading-col">
              <h1 className="menu-heading">menu</h1>
            </div>
            <div className="menu-links-col">
              <nav className="menu-nav-col">
                <a href="#" className="menu-link" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="#" className="menu-link" onClick={() => setMenuOpen(false)}>About</a>
                <a href="#" className="menu-link" onClick={() => setMenuOpen(false)}>Team</a>
                <a href="#" className="menu-link" onClick={() => setMenuOpen(false)}>Work</a>
                <a href="#" className="menu-link" onClick={() => setMenuOpen(false)}>Contact</a>
              </nav>
            </div>
            <div className="menu-services-col">
              <div className="menu-col-title">Services</div>
              <a href="#" className="menu-col-link">Creative</a>
              <a href="#" className="menu-col-link">Content</a>
              <a href="#" className="menu-col-link">Environment</a>
              <a href="#" className="menu-col-link">Experiences</a>
              <div className="menu-col-underline"></div>
              <a href="#" className="menu-col-link small">Sustainability</a>
              <a href="#" className="menu-col-link small">Equality</a>
            </div>
            <div className="menu-social-col">
              <div className="menu-col-title">Social</div>
              <a href="#" className="menu-col-link">Instagram <span className="external-arrow">↗</span></a>
              <a href="#" className="menu-col-link">LinkedIn <span className="external-arrow">↗</span></a>
            </div>
          </div>
        </div>
      )}
      {/* Hero Section with Video Background and Animated Text */}
      <section className="video-hero-section">
        <video
          className="video-hero-bg fade-in-video"
          src="/videos/wall of Light Moving Stage Glow No Copyright Free Motion Graphics Background Video Loop - Light Show.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="video-hero-overlay" />
        <div className="animated-hero-content">
          <h1 className="trivoly-hero-title">Trivoly Dome</h1>
        </div>
        <div className="scroll-down-indicator" onClick={() => {
          document.getElementById('next-section').scrollIntoView({ behavior: 'smooth' });
        }}>
          <span className="arrow">&#8595;</span>
        </div>
      </section>
      {/* Next Section */}
      <section id="next-section" className="next-section" ref={nextSectionRef}>
        <div className="next-section-content">
          <h2 className="next-section-title">We believe every interaction between brand and audience is an opportunity to create an experience.</h2>
          <p className="next-section-subtitle">So we think experience-first, building brands through shared experiences that activate human connections.</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" ref={(el) => (sectionsRef.current[0] = el)}>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="service-video-container">
                <video
                  className="service-video"
                  src={service.video}
                  muted
                  loop
                  playsInline
                />
              </div>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Coming Soon Event Slider */}
      <section className="coming-soon-section" ref={(el) => (sectionsRef.current[1] = el)}>
        <h2 className="coming-soon-title">UPCOMING EVENTS</h2>
        <div className="event-slider">
          <button className="slider-arrow left" onClick={prevSlide}>&lt;</button>
          <div className="event-cards">
            {events.map((event, idx) => (
              <div key={idx} className={`event-card${idx === current ? ' active' : ''}`}> 
                <div className="event-card-media">
                  <video
                    className="event-video"
                    src={event.video}
                    poster={event.image}
                    muted
                    loop
                    playsInline
                  />
                </div>
                <div className="event-card-date">{event.date}</div>
                <div className="event-card-title">{event.title}</div>
                <div className="event-card-subtitle">{event.subtitle}</div>
              </div>
            ))}
          </div>
          <button className="slider-arrow right" onClick={nextSlide}>&gt;</button>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience" ref={(el) => (sectionsRef.current[2] = el)}>
        <div className="experience-content">
          <h2>We believe every interaction between brand and audience is an opportunity to create an experience.</h2>
          <p>So we think experience-first, building brands through shared experiences that activate human connections.</p>
          <Link to="/contact" className="experience-btn">Get in touch</Link>
        </div>
      </section>
    </div>
  );
}

export default Home; 