import React from 'react';
import '../../styles/PhotoShowcase.css';
import glytimeImage from '../../assets/Telegram Desktop/GLYTIME FOODS.png';
import mrChitateImage from '../../assets/Telegram Desktop/Mr H. Chitate.png';
import slowgradImage from '../../assets/Telegram Desktop/hero.png';

const PhotoShowcase = () => {
  // Array of photos for the showcase
  const photos = [
    { id: 1, image: glytimeImage, title: 'Glytime Foods Facility', description: 'Modern industrial design' },
    { id: 2, image: slowgradImage, title: 'Slowgrad Sandton', description: 'Commercial development' },
    { id: 3, image: mrChitateImage, title: 'Chitate Residence', description: 'Luxury residential build' },
    { id: 4, image: slowgradImage, title: 'Sandton Project', description: 'Mixed-use development' },
  ];

  return (
    <div className="photo-showcase-container">
      <div className="section-header">
        <h2>PROJECT PORTFOLIO</h2>
        <div className="header-underline"></div>
      </div>

      <p className="showcase-intro">
        Our projects span across various sectors, each with its unique challenges and solutions. 
        Browse through our visual portfolio highlighting the diversity of our construction expertise.
      </p>

      <div className="photo-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-item">
            <div className="photo-container">
              <img src={photo.image} alt={photo.title} className="showcase-image" />
            </div>
            <div className="photo-overlay">
              <h3>{photo.title}</h3>
              <p>{photo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoShowcase; 