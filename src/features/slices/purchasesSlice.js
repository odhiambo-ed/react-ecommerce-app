import { createSlice } from '@reduxjs/toolkit';
import db from '../../firebase';

export const purchasesSlice = createSlice({
    name: 'purchases',
    initialState: {
        value: [],
    },
    reducers: {
        getPurchasesData: (state, action) => {
            state.value = [...action.payload];
        },
        addToPurchases: (state, action) => {
            db.collection('purchased').add(action.payload);
        },
    },
});

export const { getPurchasesData, addToPurchases } = purchasesSlice.actions;

export default purchasesSlice.reducer;
