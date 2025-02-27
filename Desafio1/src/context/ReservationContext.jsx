// src/context/ReservationContext.js
"use client";
import { createContext, useState } from "react";

export const ReservationContext = createContext();

export const ReservationProvider = ({ children }) => {
  const initialClasses = [
    {
      id: 1, 
      name: 'Flow Yoga', 
      time: '07:00 AM', 
      available: 12, 
      image: '/images/yoga.jpg',
      description: 'Una clase de yoga fluido para mejorar la flexibilidad y reducir el estrés.'
    },
    {
      id: 2, 
      name: 'Spinning Power', 
      time: '08:30 AM', 
      available: 10, 
      image: '/images/spinning.jpg',
      description: 'Entrenamiento de alta intensidad en bicicleta para quemar calorías.'
    },
    {
      id: 3, 
      name: 'Funcional Plus', 
      time: '10:00 AM', 
      available: 8, 
      image: '/images/funcional.jpg',
      description: 'Entrenamiento funcional para fortalecer todo el cuerpo.'
    },
    {
      id: 4, 
      name: 'Body Sculpt', 
      time: '05:00 PM', 
      available: 6, 
      image: '/images/body-sculpt.jpg',
      description: 'Clase para tonificar y esculpir el cuerpo con ejercicios localizados.'
    },
    {
      id: 5, 
      name: 'Pilates Balance', 
      time: '06:30 PM', 
      available: 9, 
      image: '/images/pilates.jpg',
      description: 'Fortalece tu núcleo y mejora el equilibrio con ejercicios de Pilates.'
    },
    {
      id: 6, 
      name: 'Kickboxing Cardio', 
      time: '07:30 PM', 
      available: 15, 
      image: '/images/kickboxing.jpg',
      description: 'Una clase intensa de kickboxing para mejorar tu resistencia cardiovascular.'
    }
  ];

  const [classes, setClasses] = useState(initialClasses);
  const [reservations, setReservations] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const reserveClass = (classId) => {
    if (reservations.find(r => r.id === classId)) return false;
    const selectedClass = classes.find(c => c.id === classId);
    if (selectedClass && selectedClass.available > 0) {
      setReservations([...reservations, selectedClass]);
      setClasses(classes.map(c => 
        c.id === classId ? { ...c, available: c.available - 1 } : c
      ));
      return true;
    }
    return false;
  };

  const cancelReservation = (classId) => {
    const reservationIndex = reservations.findIndex(r => r.id === classId);
    if (reservationIndex > -1) {
      const updatedReservations = [...reservations];
      updatedReservations.splice(reservationIndex, 1);
      setReservations(updatedReservations);

      // Liberar cupo
      setClasses(classes.map(c => 
        c.id === classId ? { ...c, available: c.available + 1 } : c
      ));
      return true;
    }
    return false;
  };

  return (
    <ReservationContext.Provider 
      value={{ 
        classes, 
        reservations, 
        reserveClass,
        cancelReservation
      }}>
      {children}
    </ReservationContext.Provider>
  );
};