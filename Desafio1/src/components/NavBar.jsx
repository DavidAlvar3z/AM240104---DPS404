// src/components/NavBar.jsx
"use client";
import React, { useState } from 'react';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleClick = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="#">Gym Reservas</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button 
                className={`nav-link btn ${activeSection === "clases" ? "active-link" : ""}`} 
                onClick={() => handleClick("clases")}
              >
                Clases
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link btn ${activeSection === "reserva" ? "active-link" : ""}`} 
                onClick={() => handleClick("reserva")}
              >
                Reservar
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link btn ${activeSection === "resumen" ? "active-link" : ""}`} 
                onClick={() => handleClick("resumen")}
              >
                Resumen
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;