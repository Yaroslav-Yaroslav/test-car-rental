import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6481a0f929fa1c5c5031c6c7.mockapi.io';

export const fetchAllCars = createAsyncThunk(
  'cars/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts?page=${page}&limit=8`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


