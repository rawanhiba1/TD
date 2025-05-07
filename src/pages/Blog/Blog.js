import React from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <h1>Blog</h1>
        <p>Latest News and Insights from the Event Industry</p>
      </div>

      <div className="blog-content">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-details">
                <span className="category-tag">{post.category}</span>
                <span className="post-date">{post.date}</span>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="read-more">
                  Read More
                </Link>
              </div>
            </article>
          ))}
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