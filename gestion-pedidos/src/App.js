import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Mesas from './components/Mesas';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Gestión de Pedidos - Restaurante</h1>
        <Mesas />
      </div>
    </Provider>
  );
}

export default App;
