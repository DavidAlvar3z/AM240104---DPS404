// src/components/ResumenReserva.jsx
import React, { useContext } from 'react';
import { ReservationContext } from '../context/ReservationContext';

const ResumenReserva = () => {
  const { reservations, cancelReservation } = useContext(ReservationContext);

  const handleCancel = (id) => {
    const success = cancelReservation(id);
    if (success) {
      alert('¡Reserva cancelada y cupo liberado!');
    } else {
      alert('Error al cancelar la reserva.');
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Resumen de Reservas</h2>
      {reservations.length === 0 ? (
        <p>No tienes reservas realizadas.</p>
      ) : (
        <ul className="list-group">
          {reservations.map(reserva => (
            <li key={reserva.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5>{reserva.name}</h5>
                <p>{reserva.time}</p>
              </div>
              <button 
                className="btn btn-danger"
                onClick={() => handleCancel(reserva.id)}
              >
                Cancelar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResumenReserva;
