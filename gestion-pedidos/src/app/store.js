import { configureStore } from '@reduxjs/toolkit';
import mesasReducer from '../features/mesas/mesasSlice';
import menuReducer from '../../features/menu/menuSlice';
import pedidosReducer from '../features/pedidos/pedidosSlice';

export const store = configureStore({
  reducer: {
    mesas: mesasReducer,
    menu: menuReducer,
    pedidos: pedidosReducer,
  },
});
