import { useParams } from 'react-router-dom';

const projects = {
  'concert-hall': {
    title: 'CONCERT HALL',
    location: 'NEW YORK',
    year: '2023',
    description: 'Concert Hall is the architecture of a new generation, a building that exists not only in the dimension of space, but also in the dimension of time and communication. The building is designed to provide an immersive acoustic experience while creating a landmark for the city.',
    backgroundColor: '#3a3a3a',
    architect: 'John Doe',
    area: '25,000 m²',
    client: 'New York City Department of Culture',
    status: 'Completed'
  },
  'hospital': {
    title: 'HOSPITAL',
    location: 'PARIS',
    year: '2022',
    description: 'This modern hospital facility combines cutting-edge medical technology with patient-centered design. The architecture prioritizes natural light, clear wayfinding, and healing environments to support both patients and healthcare professionals.',
    backgroundColor: '#444444',
    architect: 'Jane Smith',
    area: '45,000 m²',
    client: 'Paris Health Authority',
    status: 'Completed'
  },
  'modern-hotel-1': {
    title: 'MODERN HOTEL',
    location: 'LONDON',
    year: '2021',
    description: 'This luxury hotel redefines hospitality design with its innovative architecture and interior spaces. The building responds to its urban context while creating a distinctive presence in the London skyline.',
    backgroundColor: '#505050',
    architect: 'Michael Johnson',
    area: '30,000 m²',
    client: 'London Luxury Hotels Group',
    status: 'Completed'
  },
  'modern-hotel-2': {
    title: 'MODERN HOTEL',
    location: 'LONDON',
    year: '2020',
    description: 'A contemporary boutique hotel that blends historic and modern elements. The design preserves the heritage of the building while incorporating contemporary interventions to create unique guest experiences.',
    backgroundColor: '#606060',
    architect: 'Sarah Williams',
    area: '18,000 m²',
    client: 'Heritage Hotels Ltd',
    status: 'Completed'
  }
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects[slug];
  
  if (!project) {
    return <div className="project-not-found">Project not found</div>;
  }

  return (
    <div className="project-detail">
      <div 
        className="project-hero" 
        style={{ backgroundColor: project.backgroundColor }}
      >
        <div className="project-hero-content">
          <h1>{project.title}</h1>
          <p className="project-location">{project.location}</p>
        </div>
      </div>
      
      <div className="project-info">
        <div className="project-description">
          <h2>Project Overview</h2>
          <p>{project.description}</p>
        </div>
        
        <div className="project-specs">
          <div className="spec-item">
            <span className="spec-label">Architect</span>
            <span className="spec-value">{project.architect}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Year</span>
            <span className="spec-value">{project.year}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Area</span>
            <span className="spec-value">{project.area}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Client</span>
            <span className="spec-value">{project.client}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Status</span>
            <span className="spec-value">{project.status}</span>
          </div>
        </div>
      </div>
      
      <div className="project-gallery">
        <div className="gallery-message">
          Project gallery images coming soon.
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 