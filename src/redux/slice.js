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
      favorites: [],
    isLoading: false,
    error: null,
  },reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        item => item.id !== action.payload.id
      );
    }
  },
  extraReducers: builder =>
    builder
      .addCase(fetchCars.pending, pendingReducer)
      .addCase(fetchCars.fulfilled, fetchCarsFulfilledReducer)
      .addCase(fetchCars.rejected, rejectedReducer),
});

export const { addFavorite, removeFavorite } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
