import React from 'react';
import '../../styles/ClientsSection.css';
import unicefLogo from '../../assets/UNICEF.png';
import zpcLogo from '../../assets/ZPC.png';
import bancAbcLogo from '../../assets/BANC ABC.png';

const ClientsSection = () => {
  // Array of clients with their logos
  const clients = [
    { id: 1, name: 'UNICEF', logo: unicefLogo },
    { id: 2, name: 'ZPC', logo: zpcLogo },
    { id: 3, name: 'BANC ABC', logo: bancAbcLogo },
  ];

  return (
    <section className="clients-section">
      <div className="container">
        <div className="section-header">
          <h2>STRUQTON STRUCTURAL CLIENTS</h2>
          <div className="header-underline"></div>
        </div>

        <p className="clients-intro">
          Struqton Structural is proud to have worked with these trusted organizations. Our commitment to excellence
          has made us the preferred partner for both public and private sector clients.
        </p>

        <div className="client-logos">
          {clients.map((client) => (
            <div key={client.id} className="client-logo-container">
              <img src={client.logo} alt={`${client.name} logo`} className="client-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection; 