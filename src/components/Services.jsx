// src/components/Services.js
import React from "react";
import "./Services.css"; // Import del file CSS

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container mx-auto">
        <div className="services-section__grid">
          {/* Card Abbigliamento Donna */}
          <div className="services-card">
            <img
              src={`${process.env.PUBLIC_URL}/assets/donna.jpg`}
              alt="Abbigliamento Donna"
              className="services-card__image"
            />
            <div className="services-card__content">
              <h3 className="services-card__title">Donna</h3>
              <p className="services-card__text">
                Scopri la nostra selezione di abbigliamento femminile, dalle ultime tendenze ai classici intramontabili.
              </p>
            </div>
          </div>

          {/* Card Abbigliamento Uomo */}
          <div className="services-card">
            <img
              src={`${process.env.PUBLIC_URL}/assets/uomo.jpg`}
              alt="Abbigliamento Uomo"
              className="services-card__image"
            />
            <div className="services-card__content">
              <h3 className="services-card__title">Uomo</h3>
              <p className="services-card__text">
                Esplora la nostra collezione di abbigliamento maschile, perfetto per ogni occasione.
              </p>
            </div>
          </div>

          {/* Card Abbigliamento Bambino */}
          <div className="services-card">
            <img
              src={`${process.env.PUBLIC_URL}/assets/bambino.jpg`}
              alt="Abbigliamento Bambino"
              className="services-card__image"
            />
            <div className="services-card__content">
              <h3 className="services-card__title">Bambino</h3>
              <p className="services-card__text">
                Vesti i più piccoli con stile grazie alla nostra linea di abbigliamento per bambini.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
