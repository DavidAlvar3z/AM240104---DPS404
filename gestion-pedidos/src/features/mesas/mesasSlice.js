import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, nombre: 'Mesa 1', estado: 'Disponible' },
  { id: 2, nombre: 'Mesa 2', estado: 'Disponible' }
];

const mesasSlice = createSlice({
  name: 'mesas',
  initialState,
  reducers: {
    ocuparMesa: (state, action) => {
      const mesa = state.find(m => m.id === action.payload);
      if (mesa) mesa.estado = 'Ocupada';
    },
    liberarMesa: (state, action) => {
      const mesa = state.find(m => m.id === action.payload);
      if (mesa) mesa.estado = 'Disponible';
    },
  }
});

export const { ocuparMesa, liberarMesa } = mesasSlice.actions;
export default mesasSlice.reducer;
