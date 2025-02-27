// src/components/ReservaClase.jsx
"use client";
import React, { useContext } from "react";
import { ReservationContext } from "../context/ReservationContext";

const ReservaClase = () => {
  const { classes, reserveClass } = useContext(ReservationContext);

  if (!classes) {
    return <p>Cargando clases...</p>;
  }

  const handleReserve = (id) => {
    const success = reserveClass(id);
    if (success) {
      alert("¡Reserva realizada con éxito!");
    } else {
      alert("Error: Ya reservaste esta clase o no hay cupos disponibles.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Reservar Clase</h2>
      <ul className="list-group">
        {classes.map((clase) => (
          <li key={clase.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{clase.name}</h5>
              <p>{clase.time}</p>
              <span className="badge bg-primary rounded-pill">
                Cupos: {clase.available}
              </span>
            </div>
            <button 
              className="btn btn-success"
              onClick={() => handleReserve(clase.id)}
              disabled={clase.available === 0}
            >
              Reservar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservaClase;
