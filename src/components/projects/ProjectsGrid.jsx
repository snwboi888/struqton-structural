import { Link } from 'react-router-dom';

const ProjectsGrid = () => {
  const projects = [
    {
      id: 1,
      title: 'CONCERT HALL',
      location: 'IN NEW YORK',
      slug: 'concert-hall',
      backgroundColor: '#3a3a3a'
    },
    {
      id: 2,
      title: 'HOSPITAL',
      location: 'IN PARIS',
      slug: 'hospital',
      backgroundColor: '#444444'
    },
    {
      id: 3,
      title: 'MODERN HOTEL',
      location: 'IN LONDON',
      slug: 'modern-hotel-1',
      backgroundColor: '#505050'
    },
    {
      id: 4,
      title: 'MODERN HOTEL',
      location: 'IN LONDON',
      slug: 'modern-hotel-2',
      backgroundColor: '#606060'
    }
  ];

  return (
    <section className="projects-section">
      <h2 className="section-title">OUR PROJECTS</h2>
      
      <div className="projects-grid">
        {projects.map(project => (
          <Link 
            to={`/projects/${project.slug}`} 
            className="project-card" 
            key={project.id}
          >
            <div 
              className="project-image" 
              style={{ backgroundColor: project.backgroundColor }}
            >
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-location">{project.location}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid; 