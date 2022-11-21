import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/slices/authSlice';
import cartReducer from '../features/slices/cartSlice';
import favoritesReducer from '../features/slices/favoritesSlice';
import purchasesReducer from '../features/slices/purchasesSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
    purchases: purchasesReducer,
  },
});
