"use client";

import { useState } from "react";

export default function Home() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = (operacion) => {
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    let res = "";

    switch (operacion) {
      case "suma":
        res = `Resultado de la suma: ${n1 + n2}`;
        break;
      case "resta":
        res = `Resultado de la resta: ${n1 - n2}`;
        break;
      case "multiplicacion":
        res = `Resultado de la multiplicación: ${n1 * n2}`;
        break;
      case "division":
        res = n2 !== 0 ? `Resultado de la división: ${(n1 / n2).toFixed(2)}` : "No se puede dividir por 0";
        break;
      case "potencia":
        res = `Resultado de la potenciación: ${Math.pow(n1, n2)}`;
        break;
      case "raiz":
        res = n1 >= 0 ? `Raíz cuadrada de ${n1}: ${Math.sqrt(n1).toFixed(2)}` : "No se puede calcular la raíz de un número negativo";
        break;
      default:
        res = "Operación no válida";
    }

    setResultado(res);
  };

  return (
    <main className="main">
      <div className="calculadora">
        <h2 className="title2">Calculadora Animada</h2>
        <div className="numeros">
          <label className="text">Número 1:</label>
          <input className="inputnum" type="number" value={numero1} onChange={(e) => setNumero1(e.target.value)} />
        </div>
        
        <div className="numeros">
          <label className="text">Número 2:</label>
          <input className="inputnum" type="number" value={numero2} onChange={(e) => setNumero2(e.target.value)} />
        </div>
        
        <div className="buttons">
          <button className="button" onClick={() => calcular("suma")}>Sumar</button>
          <button className="button" onClick={() => calcular("resta")}>Restar</button>
          <button className="button" onClick={() => calcular("multiplicacion")}>Multiplicar</button>
          <button className="button" onClick={() => calcular("division")}>Dividir</button>
          <button className="button" onClick={() => calcular("potencia")}>Potencia</button>
          <button className="button" onClick={() => calcular("raiz")}>Raíz Cuadrada</button>
        </div>
        
        {resultado && <div className="resultado">{resultado}</div>}
      </div>
      <style jsx>{`
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 6rem;
          min-height: 100vh;
          background: linear-gradient(135deg, #d9d9d9, #bfbfbf);
          animation: fadeIn 1s ease-in-out;
        }
        .calculadora {
          background: #e0e0e0;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
          transition: transform 0.3s;
        }
        .calculadora:hover {
          transform: scale(1.02);
        }
        .title2 {
          color: #4d4d4d;
          text-align: center;
        }
        .numeros {
          margin-bottom: 10px;
        }
        .text {
          margin-right: 10px;
          font-weight: bold;
          color: #666;
        }
        .inputnum {
          padding: 5px;
          border: 2px solid #999;
          border-radius: 5px;
          background: #f2f2f2;
          color: #333;
        }
        .buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 10px;
          justify-content: center;
        }
        .button {
          padding: 10px;
          background: #8c8c8c;
          color: white;
          border: none;
          cursor: pointer;
          border-radius: 5px;
          transition: background 0.3s, transform 0.2s;
        }
        .button:hover {
          background: #737373;
          transform: scale(1.05);
        }
        .resultado {
          margin-top: 20px;
          padding: 10px;
          background: #cccccc;
          border-radius: 5px;
          text-align: center;
          font-weight: bold;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}