// src/components/ListadoClases.jsx
"use client";
import React, { useContext, useState } from 'react';
import { ReservationContext } from '../context/ReservationContext';
import Image from 'next/image';

const ListadoClases = () => {
  const { classes, reserveClass } = useContext(ReservationContext);
  const [selectedClass, setSelectedClass] = useState(null);

  const handleReserve = (id) => {
    const success = reserveClass(id);
    if (success) {
      alert('¡Reserva realizada con éxito!');
    } else {
      alert('Error: Ya reservaste esta clase o no hay cupos disponibles.');
    }
  };

  const openModal = (clase) => {
    setSelectedClass(clase);
  };

  const closeModal = () => {
    setSelectedClass(null);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Clases Disponibles</h2>
      <div className="row">
        {classes.map(clase => (
          <div key={clase.id} className="col-md-4 mb-4">
            <div className="card-custom shadow-sm">
              <Image 
                src={clase.image} 
                className="card-img-top-custom" 
                alt={clase.name} 
                width={300} 
                height={200} 
              />
              <div className="card-body">
                <h5 className="card-title">{clase.name}</h5>
                <p className="card-text">{clase.time}</p>
                <button 
                  className="btn btn-primary" 
                  onClick={() => openModal(clase)}
                >
                  Ver más
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedClass && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content-glass" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>×</button>
            <Image 
              src={selectedClass.image} 
              className="modal-img" 
              alt={selectedClass.name} 
              width={500} 
              height={300} 
            />
            <h3>{selectedClass.name}</h3>
            <p>{selectedClass.description}</p>
            <span className="badge bg-primary rounded-pill mb-3">
              Cupos: {selectedClass.available}
            </span>
            <button 
              className="btn btn-success"
              onClick={() => handleReserve(selectedClass.id)}
              disabled={selectedClass.available === 0}
            >
              Reservar Clase
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListadoClases;