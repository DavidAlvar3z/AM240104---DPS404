// src/app/page.js
"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { ReservationProvider } from "../context/ReservationContext";
import NavBar from "../components/NavBar";
import ListadoClases from "../components/ListadoClases";
import ReservaClase from "../components/ReservaClase";
import ResumenReserva from "../components/ResumenReserva";
import { useEffect, useState } from "react";

export default function MyApp() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 3000); // Ocultar después de 3 segundos
    return () => clearTimeout(timer);
  }, []);

  return (
    <ReservationProvider>
      <NavBar />
      {showWelcome && (
        <div className="welcome-container">
          <h1>Bienvenido a Gym Reservas</h1>
        </div>
      )}
      <ListadoClases />
      <ReservaClase />
      <ResumenReserva />
    </ReservationProvider>
  );
}