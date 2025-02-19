import { useState, useEffect } from "react";
import "./styles.css";

export default function Planetas() {
  const [planetas, setPlanetas] = useState([]);
  const [selected, setSelected] = useState(null);
  const [activeTab, setActiveTab] = useState("masa");

  useEffect(() => {
    fetch("/planetas.json")
      .then((res) => res.json())
      .then((data) => setPlanetas(data));
  }, []);

  const renderTabContent = () => {
    if (!selected) return null;
    switch (activeTab) {
      case "masa":
        return <p><strong>Masa:</strong> {selected.masa}</p>;
      case "distancia":
        return <p><strong>Distancia al Sol:</strong> {selected.distancia}</p>;
      case "temperatura":
        return <p><strong>Temperatura:</strong> {selected.temperatura}</p>;
      default:
        return null;
    }
  };

  return (
    <div className="planetas-container">
      <h2>Planetas del Sistema Solar</h2>
      <div className="slider">
        {planetas.map((p, index) => (
          <img
            key={index}
            src={p.imagen}
            alt={p.nombre}
            onClick={() => { setSelected(p); setActiveTab("masa"); }}
            className="planet-image"
          />
        ))}
      </div>
      {selected && (
        <div className="planet-info">
          <h3>{selected.nombre}</h3>
          <div className="tabs-info">
            <button
              className={`tab-info ${activeTab === "masa" ? "active" : ""}`}
              onClick={() => setActiveTab("masa")}
            >
              Masa
            </button>
            <button
              className={`tab-info ${activeTab === "distancia" ? "active" : ""}`}
              onClick={() => setActiveTab("distancia")}
            >
              Distancia
            </button>
            <button
              className={`tab-info ${activeTab === "temperatura" ? "active" : ""}`}
              onClick={() => setActiveTab("temperatura")}
            >
              Temperatura
            </button>
          </div>
          <div className="tab-content">
            {renderTabContent()}
          </div>
        </div>
      )}
    </div>
  );
}
