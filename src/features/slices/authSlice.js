import { createSlice } from '@reduxjs/toolkit';
import { auth, provider } from '../../firebase';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: 0,
  },
  reducers: {
    signIn: () => {
      auth.signInWithPopup(provider);
    },
    signOut: () => {
      auth.signOut();
    },
  },
});

export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;
