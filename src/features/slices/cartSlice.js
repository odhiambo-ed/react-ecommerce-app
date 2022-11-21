import { createSlice } from '@reduxjs/toolkit';
import db from '../../firebase';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    getData: (state, action) => {
      state.value = [...action.payload];
    },
    addToCart: (state, action) => {
      db.collection('cartPlacement').add(action.payload);
    },
    removeFromCart: (state, action) => {
      db.collection('cartPlacement').doc(action.payload).delete();
    },
    updateCart: (state, action) => {
      db.collection('cartPlacement').doc(action.payload.id).update(action.payload.data);
    },
  },
});

export const {
  getData, addToCart, removeFromCart, updateCart,
} = cartSlice.actions;

export default cartSlice.reducer;
