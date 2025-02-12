'use client';

import { useState } from "react";
import "./style.css";

export default function App() {
  return (
    <div className="container">
      <h1>Aplicación React</h1>
      <Counter />
      <TemperatureConverter />
      <LoginForm />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>Contador</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  );
}

function TemperatureConverter() {
  const [temperature, setTemperature] = useState("");
  const [converted, setConverted] = useState("");
  const [unit, setUnit] = useState("C");

  const convertTemp = () => {
    if (unit === "C") {
      setConverted(((parseFloat(temperature) * 9) / 5 + 32).toFixed(2) + " °F");
    } else {
      setConverted((((parseFloat(temperature) - 32) * 5) / 9).toFixed(2) + " °C");
    }
  };

  return (
    <div className="converter">
      <h2>Conversor de Temperatura</h2>
      <input
        type="number"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
        placeholder="Ingrese temperatura"
      />
      <select onChange={(e) => setUnit(e.target.value)} value={unit}>
        <option value="C">Celsius a Fahrenheit</option>
        <option value="F">Fahrenheit a Celsius</option>
      </select>
      <button onClick={convertTemp}>Convertir</button>
      <p>{converted}</p>
    </div>
  );
}

function LoginForm() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (user === "admin" && password === "1234") {
      setMessage("Bienvenido " + user);
    } else {
      setMessage("Credenciales incorrectas");
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar Sesión</button>
      <p>{message}</p>
    </div>
  );
}
