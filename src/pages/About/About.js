import React, { useRef, useEffect } from 'react';
import useFadeInOnVisible from '../../components/useFadeInOnVisible';
import '../../styles/About.css';

function About() {
  const heroRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  useFadeInOnVisible(heroRef);
  useFadeInOnVisible(section1Ref);
  useFadeInOnVisible(section2Ref);
  useFadeInOnVisible(section3Ref);
  useFadeInOnVisible(section4Ref);

  return (
    <div className="about-page">
      <div className="about-hero" ref={heroRef}>
        <h1>About Us</h1>
        <p>Your Trusted Event Management Partner in the UAE</p>
      </div>

      <div className="about-content">
        <section className="about-section" ref={section1Ref}>
          <h2>Our Story</h2>
          <p>
            With years of industry expertise, the River and Sky Event Management team understands
            the intricacies of event planning and execution. Our diverse portfolio spans a wide
            range of events, equipping us to navigate challenges and deliver seamless experiences.
          </p>
        </section>

        <section className="about-section" ref={section2Ref}>
          <h2>Our Mission</h2>
          <p>
            We are dedicated to creating exceptional events that exceed expectations. Our mission
            is to transform your vision into reality, ensuring every detail is perfect and every
            moment is memorable.
          </p>
        </section>

        <section className="about-section" ref={section3Ref}>
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Experience</h3>
              <p>Years of expertise in event management and planning</p>
            </div>
            <div className="feature-card">
              <h3>Creativity</h3>
              <p>Innovative solutions and unique event concepts</p>
            </div>
            <div className="feature-card">
              <h3>Reliability</h3>
              <p>Dedicated team committed to delivering excellence</p>
            </div>
            <div className="feature-card">
              <h3>Quality</h3>
              <p>Premium services and attention to detail</p>
            </div>
          </div>
        </section>

        <section className="about-section" ref={section4Ref}>
          <h2>Our Team</h2>
          <p>
            Our team consists of passionate professionals who bring creativity, expertise, and
            dedication to every project. We work together to ensure your event is a success,
            handling everything from concept development to final execution.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About; 