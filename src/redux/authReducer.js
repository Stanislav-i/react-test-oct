import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const $instance = axios.create({
    baseURL: 'https://technical-task-api.icapgroupgmbh.com/api',
  });

export const loginUserThunk = createAsyncThunk(
    'auth/login',
    async (userData, thunkApi) => {
      try {
        const { status } = await $instance.post('/login/', userData);
        return status;
      } catch (response) {
        const errorMessage = response.response.data.error;
        return thunkApi.rejectWithValue(errorMessage);
      }
    }
  );  

const initialState = {
  isLoading: false,
  error: null,
  authentificated: false, 
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state)=>{
      state.authentificated = false;
    },
  },
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
      })
});

export const selectAuthentificated = state => state.auth.authentificated;
export const selectLoginError = state => state.auth.error;
export const {logOut} =authSlice.actions; 

export const authReducer = authSlice.reducer;
