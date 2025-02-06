"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState(null);

  const equiposData = [
    {
      id: 1,
      nombre: "Real Madrid",
      plantilla: [
        { id: 1, nombre: "Eden Hazard", Altura: "1.75", Peso: "74", foto: "/hazard.jpg" },
        { id: 2, nombre: "Gonzalo García", Altura: "1.82", Peso: "74", foto: "/gonzalo.jpg" },
        { id: 3, nombre: "Karim Benzema", Altura: "1.85", Peso: "81", foto: "/benzema.jpg" },
      ],
    },
    {
      id: 2,
      nombre: "Barcelona",
      plantilla: [
        { id: 1, nombre: "Marc-André ter Stegen", Altura: "1.75", Peso: "74", foto: "/stegen.jpg" },
        { id: 2, nombre: "Iñigo Martinez", Altura: "1.82", Peso: "74", foto: "/inigo.jpg" },
        { id: 3, nombre: "Gavi", Altura: "1.85", Peso: "81", foto: "/gavi.jpg" },
      ],
    },
  ];

  return (
    <main className="main">
      <div className="equipos">
        <h2 className="title">Equipos de Fútbol</h2>
        {equiposData.map((equipo) => (
          <div key={equipo.id} className="equipo">
            <h3 className="equipo-nombre">{equipo.nombre}</h3>
            <div className="jugadores">
              {equipo.plantilla.map((jugador) => (
                <div key={jugador.id} className="jugador">
                  <Image src={jugador.foto} alt={jugador.nombre} width={100} height={100} className="jugador-foto" />
                  <div className="jugador-info">
                    <strong>{jugador.nombre}</strong>
                    <p>Altura: {jugador.Altura}m</p>
                    <p>Peso: {jugador.Peso}Kg</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 4rem;
          background: linear-gradient(135deg, #e0e0e0, #bdbdbd);
          min-height: 100vh;
        }
        .equipos {
          width: 80%;
          background: #f5f5f5;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        }
        .title {
          text-align: center;
          color: #333;
        }
        .equipo {
          margin-bottom: 20px;
          padding: 10px;
          border-bottom: 2px solid #999;
        }
        .equipo-nombre {
          font-size: 1.5rem;
          color: #444;
        }
        .jugadores {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          justify-content: center;
        }
        .jugador {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #e0e0e0;
          padding: 15px;
          border-radius: 8px;
          width: 150px;
          text-align: center;
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
        }
        .jugador-foto {
          border-radius: 50%;
          margin-bottom: 10px;
        }
        .jugador-info {
          font-size: 0.9rem;
          color: #333;
        }
      `}</style>
    </main>
  );
}
