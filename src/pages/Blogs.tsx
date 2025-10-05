import React from 'react';
import './Blogs.css';
import { FaMedium, FaDev } from 'react-icons/fa';

const blogs = [
  {
    title: "How I Use Data Visualization to Make Smarter Decisions",
    platform: "Medium",
    icon: <FaMedium />,
    link: "https://medium.com/@nnithin357/how-i-use-data-visualization-to-make-smarter-decisions-63cb839c47d1",
    description: "Learn tips to customize and Make Smarter Decisions .",
  },
  {
    title: "Database overview.",
    platform: "Medium",
    icon: <FaMedium />,
    link: "https://medium.com/@nnithin357/database-overview-9e470eccfcdc",
    description: "A database is a collection of data that is organized in a specific ways.",
  },
  {
    title: "Harnessing the Power of Data and AI to Transform Your Career and Projects",
    platform: "Dev.to",
    icon: <FaDev />,
    link: "https://medium.com/@nnithin357/harnessing-the-power-of-data-and-ai-to-transform-your-career-and-projects-4cb8d396f963",
    description: "Data and AI are shaping the future, but the real differentiator.",
  },
  
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">✍️ My Blog Posts</h2>
      <p className="blogs-intro">A collection of my thoughts and tutorials on software development.</p>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <a href={blog.link} key={index} target="_blank" rel="noopener noreferrer" className="blog-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="blog-icon animated-icon">{blog.icon}</div>
            <div className="blog-info animated-text">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <span className="blog-platform">{blog.platform}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
