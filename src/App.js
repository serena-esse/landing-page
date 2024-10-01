// src/App.js
import React from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Services from "./components/Services";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Services />

      <Footer />
    </div>
  );
}

export default App;
