import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import ContactSection from '../components/home/ContactSection';
import StoryGallery from '../components/home/StoryGallery';
import PhotoShowcase from '../components/home/PhotoShowcase';
import ProjectHighlight from '../components/home/ProjectHighlight';
import ClientsSection from '../components/home/ClientsSection';
import '../styles/HomeSections.css';

const Home = () => {
  return (
    <>
      {/* Hero Section - Main banner */}
      <Hero />
      
      {/* Project Story Gallery - Visual storytelling */}
      <StoryGallery />
      
      {/* Photo Showcase - Visual portfolio */}
      <PhotoShowcase />
      
      {/* Featured Project Highlight */}
      <ProjectHighlight />
      
      {/* Our Company Info Sections */}
      <div className="company-info-container">
        <div className="section-header">
          <h2>ABOUT STRUQTON STRUCTURAL</h2>
          <div className="header-underline"></div>
        </div>
      </div>
      
      {/* Services Section */}
      <div className="services-container">
        <div className="section-header">
          <h2>OUR SERVICES</h2>
          <div className="header-underline"></div>
        </div>
        
        <section className="services-content">
          <div className="services-intro">
            <p>We provide RESIDENTIAL, INDUSTRIAL, AGRICULTURAL & COMMERCIAL construction services as a main contractor or sub-contractor.</p>
            <h3>Building Services include:</h3>
          </div>
          
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon building-icon"></div>
              <h4>Building Construction</h4>
            </div>
            <div className="service-item">
              <div className="service-icon engineering-icon"></div>
              <h4>Civil And Structural Engineering Works</h4>
            </div>
            <div className="service-item">
              <div className="service-icon concrete-icon"></div>
              <h4>Concrete works</h4>
            </div>
            <div className="service-item">
              <div className="service-icon brick-icon"></div>
              <h4>Bricklaying</h4>
            </div>
            <div className="service-item">
              <div className="service-icon carpentry-icon"></div>
              <h4>Carpentry & Joinery</h4>
            </div>
            <div className="service-item">
              <div className="service-icon electrical-icon"></div>
              <h4>Electrical Installation</h4>
            </div>
            <div className="service-item">
              <div className="service-icon maintenance-icon"></div>
              <h4>Operations and Maintenance Services</h4>
            </div>
          </div>
        </section>
      </div>
      
      {/* Our Clients Section */}
      <ClientsSection />
      
      {/* Contact Section - Get in touch */}
      <ContactSection />
    </>
  );
};

export default Home; 