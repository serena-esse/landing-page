import React from "react";
import "./MainSection.css"; // Import del file CSS

const MainSection = () => {
  return (
    <section id="main" className="main-section">
      {/* Video di sfondo */}
      <video
        className="main-section__video"
        src={`${process.env.PUBLIC_URL}/assets/landing-page.mp4`}
        autoPlay
        loop
        muted
      />

      {/* Overlay scuro */}
      <div className="main-section__overlay"></div>

      {/* Contenuto per l'iscrizione alla newsletter */}
      <div className="main-section__content">
        <h2 className="text-3xl font-bold mb-4">Iscriviti alla Newsletter</h2>
        <p className="mb-4">Rimani aggiornato sulle nostre ultime novità e offerte speciali.</p>
        <form className="form-container">
          <div className="input-wrapper">
            <input type="email" placeholder="Inserisci la tua email" className="email-input" required />
            <button type="submit" className="submit-button">
              →
            </button>
          </div>
        </form>

        {/* Sezione delle card */}
        <div className="card-grid">
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/assets/1.jpg`} alt="Card 1" className="card-image" />
          </div>
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/assets/2.jpg`} alt="Card 2" className="card-image" />
          </div>
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/assets/3.jpg`} alt="Card 3" className="card-image" />
          </div>
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/assets/4.jpg`} alt="Card 4" className="card-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
