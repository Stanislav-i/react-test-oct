import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// https://technical-task-api.icapgroupgmbh.com/api/table/?limit=10&offset=10

const $instance = axios.create({
    baseURL: 'https://technical-task-api.icapgroupgmbh.com/api',
  });

export const requestDataThunk = createAsyncThunk(
  'data/getAll',
  async (offset, thunkApi) => {
    try {
      // const { data } = await $instance.get('/table');
      const {data} = await $instance.get(`/table/?limit=10&offset=${offset}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addDataThunk = createAsyncThunk(
  'contacts/addDataThunk',
  async (data, thunkApi) => {
    try {
      const res = await $instance.post('/table', data);
      return res;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  data: null,
  isLoading: null,
  error: null,
  offset: 0,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    nextPage: (state)=>{
      state.offset +=10;
    },
    previousPage: (state)=>{
      if (state.offset > 0)
      state.offset -=10;
    },
  },
  extraReducers: builder =>
    builder
      // ---GET---
      .addCase(requestDataThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(requestDataThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // ======ADD CONTACT
      .addCase(addDataThunk.pending, (state) => {

      })
      .addCase(addDataThunk.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(addDataThunk.rejected, (state, action) => {
        state.error = action.payload;
      })
});

export const selectUserData = state => state.data.data;
export const selectDataIsLoading = state => state.data.isLoading;
export const selectDataError = state => state.data.error;
export const selectDataOffset = state => state.data.offset;

export const {nextPage, previousPage} = dataSlice.actions; 
export const dataReducer = dataSlice.reducer;