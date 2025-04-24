import React from 'react';
import '../../styles/StoryGallery.css';
import slowgradImage from '../../assets/Telegram Desktop/hero.png';
import glytimeImage from '../../assets/Telegram Desktop/GLYTIME FOODS.png';

const StoryGallery = () => {
  const projects = [
    {
      id: 1,
      title: 'SLOWGRAD SANDTON',
      description: 'A landmark development featuring modern architectural elements and sustainable design.',
      image: slowgradImage,
      phase: 'Completed 2024',
      category: 'Commercial'
    },
    {
      id: 2,
      title: 'GLYTIME FOODS',
      description: 'Modern food processing facility with cutting-edge equipment and safety standards.',
      image: glytimeImage,
      phase: 'Completed 2023',
      category: 'Industrial'
    }
  ];

  return (
    <div className="story-gallery-container">
      <div className="section-header">
        <h2>OUR PROJECT JOURNEY</h2>
        <div className="header-underline"></div>
      </div>
      
      <p className="story-intro">
        Each project tells a unique story of vision, challenges, and achievement. 
        Explore our journey through these landmark projects that showcase our dedication to excellence.
      </p>
      
      <div className="story-timeline">
        {projects.map((project, index) => (
          <div key={project.id} className={`story-card ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="story-image-container">
              <img src={project.image} alt={project.title} className="story-image" />
              <div className="story-overlay">
                <span className="story-category">{project.category}</span>
                <span className="story-phase">{project.phase}</span>
              </div>
            </div>
            <div className="story-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button className="story-button">VIEW PROJECT</button>
            </div>
            {index !== projects.length - 1 && <div className="story-connector"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryGallery; 