import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const pendingReducer = state => {
  state.isLoading = true;
};
const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const fetchCarsFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = [...state.items, ...action.payload];
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchCars.pending, pendingReducer)
      .addCase(fetchCars.fulfilled, fetchCarsFulfilledReducer)
      .addCase(fetchCars.rejected, rejectedReducer),
});

export const carsReducer = carsSlice.reducer;
