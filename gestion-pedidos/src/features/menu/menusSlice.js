import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, nombre: 'Pizza', precio: 10, categoria: 'Comida' },
  { id: 2, nombre: 'Coca-Cola', precio: 3, categoria: 'Bebidas' }
];

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {}
});

export default menuSlice.reducer;
