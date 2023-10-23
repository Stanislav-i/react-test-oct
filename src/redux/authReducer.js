import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const $instance = axios.create({
    baseURL: 'http://146.190.118.121/api',
  });

export const loginUserThunk = createAsyncThunk(
    'auth/login',
    async (userData, thunkApi) => {
      try {
        const { status } = await $instance.post('/login/', userData);
        return status;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );  

const initialState = {
  isLoading: false,
  error: null,
  authentificated: true, //change this
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      // ---LOGIN---
      .addCase(loginUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;

        state.authentificated = true;
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log(action.payload);
      })
});

export const selectAuthentificated = state => state.auth.authentificated;

export const authReducer = authSlice.reducer;
