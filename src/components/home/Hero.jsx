import { Link } from 'react-router-dom';
import heroVideo from '../../assets/hero video.mp4';
import '../../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <video autoPlay muted loop playsInline className="hero-video">
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1 className="hero-title">STRUQTON STRUCTURAL</h1>
        <p className="hero-text">
          Struqton Structural provides premium construction services in Zimbabwe. 
          With innovative design and sustainable features, our projects represent the pinnacle of 
          modern construction excellence.
        </p>
        <Link to="/projects" className="hero-button">
          VIEW PROJECTS
        </Link>
      </div>
    </section>
  );
};

export default Hero; 