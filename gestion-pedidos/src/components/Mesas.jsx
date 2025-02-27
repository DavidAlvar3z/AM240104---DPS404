import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ocuparMesa, liberarMesa } from '../features/mesas/mesasSlice';

const Mesas = () => {
  const mesas = useSelector(state => state.mesas);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Mesas</h2>
      <ul>
        {mesas.map(m => (
          <li key={m.id}>
            {m.nombre} - {m.estado}
            {m.estado === 'Disponible' ? (
              <button onClick={() => dispatch(ocuparMesa(m.id))}>Ocupar</button>
            ) : (
              <button onClick={() => dispatch(liberarMesa(m.id))}>Liberar</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mesas;
