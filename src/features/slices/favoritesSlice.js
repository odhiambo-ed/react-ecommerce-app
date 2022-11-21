import { createSlice } from '@reduxjs/toolkit';
import db from '../../firebase';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    value: [],
  },
  reducers: {
    getFavoritesData: (state, action) => {
      state.value = [...action.payload];
    },
    addToFavorites: (state, action) => {
      db.collection('favoritesPlacement').add(action.payload);
    },
    removeFromFavorites: (state, action) => {
      db.collection('favoritesPlacement').doc(action.payload).delete();
    },
  },
});

export const { getFavoritesData, addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
