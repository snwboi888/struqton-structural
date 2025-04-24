import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/ProjectHighlight.css';
import projectImage from '../../assets/Telegram Desktop/hero.png';

const ProjectHighlight = () => {
  // Project statistics
  const stats = [
    { value: '3,500', label: 'Square Meters' },
    { value: '12', label: 'Months Duration' },
    { value: '45+', label: 'Workers Involved' },
    { value: '2', label: 'Awards Won' }
  ];

  return (
    <div className="project-highlight-container">
      <div className="section-header">
        <h2>FEATURED PROJECT</h2>
        <div className="header-underline"></div>
      </div>
      
      <div className="highlight-content">
        <div className="highlight-details">
          <h3 className="highlight-title">INDUSTRIAL WAREHOUSE COMPLEX</h3>
          <p className="highlight-description">
            A state-of-the-art industrial warehouse facility that combines functionality with modern architectural design.
          </p>
          
          <div className="highlight-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
          
          <Link to="/projects/industrial-warehouse" className="highlight-button">
            VIEW FULL PROJECT
          </Link>
        </div>
        <div className="highlight-image-container">
          <img src={projectImage} alt="Industrial Warehouse Project" className="highlight-image" />
        </div>
      </div>
    </div>
  );
};

export default ProjectHighlight; 