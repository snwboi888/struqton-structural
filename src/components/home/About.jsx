const Services = () => {
  return (
    <section className="about-section">
      <h2 className="section-title">OUR SERVICES</h2>
      
      <div className="about-content">
        <div className="about-text">
          <h3>We turn ideas into works of art</h3>
          <p>
            For each project we establish relationships with partners who we know will help us create added value for your project. As well as bringing together the public and private sectors, we make sector-overarching links to gather knowledge and to learn from each other. The way we undertake projects is based on permanently applying values that reinforce each other: socio-cultural value, experiential value, building-technical value and economical value.
          </p>
        </div>
        
        <div className="specialization">
          <h3>Our specialization:</h3>
          <div className="specialization-items">
            <div className="specialization-item">
              <div className="icon">
                <span>🏛️</span>
              </div>
              <h4>ARCHITECTURE</h4>
            </div>
            <div className="specialization-item">
              <div className="icon">
                <span>🪑</span>
              </div>
              <h4>INTERIORS</h4>
            </div>
            <div className="specialization-item">
              <div className="icon">
                <span>📐</span>
              </div>
              <h4>PLANNING</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 