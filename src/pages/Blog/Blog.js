import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useFadeInOnVisible from '../../components/useFadeInOnVisible';
import '../../styles/Blog.css';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Top Event Trends for 2024',
      excerpt: 'Discover the latest trends shaping the event industry in 2024, from sustainable practices to immersive experiences.',
      date: 'March 15, 2024',
      category: 'Event Trends'
    },
    {
      id: 2,
      title: 'How to Choose the Perfect Venue',
      excerpt: 'A comprehensive guide to selecting the ideal venue for your event, considering factors like capacity, location, and amenities.',
      date: 'March 10, 2024',
      category: 'Planning Tips'
    },
    {
      id: 3,
      title: 'Sustainable Event Planning',
      excerpt: 'Learn how to organize eco-friendly events that minimize environmental impact while maximizing attendee experience.',
      date: 'March 5, 2024',
      category: 'Sustainability'
    }
  ];

  const heroRef = useRef(null);
  const post1Ref = useRef(null);
  const post2Ref = useRef(null);
  const post3Ref = useRef(null);

  useFadeInOnVisible(heroRef);
  useFadeInOnVisible(post1Ref);
  useFadeInOnVisible(post2Ref);
  useFadeInOnVisible(post3Ref);

  return (
    <div className="blog-page">
      <div className="blog-hero" ref={heroRef}>
        <h1>Blog</h1>
        <p>Latest News and Insights from the Event Industry</p>
      </div>

      <div className="blog-content">
        <div className="blog-grid">
          <article className="blog-card" ref={post1Ref}>
            <div className="blog-details">
              <span className="category-tag">{blogPosts[0].category}</span>
              <span className="post-date">{blogPosts[0].date}</span>
              <h2>{blogPosts[0].title}</h2>
              <p>{blogPosts[0].excerpt}</p>
              <Link to={`/blog/${blogPosts[0].id}`} className="read-more">
                Read More
              </Link>
            </div>
          </article>

          <article className="blog-card" ref={post2Ref}>
            <div className="blog-details">
              <span className="category-tag">{blogPosts[1].category}</span>
              <span className="post-date">{blogPosts[1].date}</span>
              <h2>{blogPosts[1].title}</h2>
              <p>{blogPosts[1].excerpt}</p>
              <Link to={`/blog/${blogPosts[1].id}`} className="read-more">
                Read More
              </Link>
            </div>
          </article>

          <article className="blog-card" ref={post3Ref}>
            <div className="blog-details">
              <span className="category-tag">{blogPosts[2].category}</span>
              <span className="post-date">{blogPosts[2].date}</span>
              <h2>{blogPosts[2].title}</h2>
              <p>{blogPosts[2].excerpt}</p>
              <Link to={`/blog/${blogPosts[2].id}`} className="read-more">
                Read More
              </Link>
            </div>
          </article>
        </div>

        <div className="blog-sidebar">
          <div className="sidebar-section">
            <h3>Categories</h3>
            <ul className="category-list">
              <li><Link to="/blog/category/event-trends">Event Trends</Link></li>
              <li><Link to="/blog/category/planning-tips">Planning Tips</Link></li>
              <li><Link to="/blog/category/sustainability">Sustainability</Link></li>
              <li><Link to="/blog/category/technology">Technology</Link></li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Recent Posts</h3>
            <ul className="recent-posts">
              {blogPosts.map((post) => (
                <li key={post.id}>
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  <span className="post-date">{post.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog; 