import { Link } from 'react-router-dom';
import '../../styles/ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section-home">
      <div className="container">
        <h2 className="section-title">CONTACT STRUQTON STRUCTURAL</h2>
        <p className="contact-intro-home">
          Get in touch with the Struqton Structural team to discuss your project requirements or to learn more about our services.
        </p>
        
        <div className="contact-info-home">
          <div className="contact-card">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="white" width="24" height="24">
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
              </svg>
            </div>
            <h3>Location</h3>
            <p>Shop 120-123, Longcheng Plaza,<br /> Mutley Bend, Belvedere,<br /> Harare, Zimbabwe</p>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white" width="24" height="24">
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
              </svg>
            </div>
            <h3>Email</h3>
            <p><a href="mailto:info@struqtonstructural.com">info@struqtonstructural.com</a></p>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white" width="24" height="24">
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
              </svg>
            </div>
            <h3>Phone</h3>
            <p><a href="tel:+263774751861">+263 774 751 861</a></p>
            <p><a href="tel:+263242711599">+263 242 711 599</a></p>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white" width="24" height="24">
                <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
              </svg>
            </div>
            <h3>Working Hours</h3>
            <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
            <p>Saturday: 9:00 AM - 1:00 PM</p>
          </div>
        </div>
        
        <div className="contact-cta">
          <Link to="/contacts" className="contact-link">Send Us a Message</Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 