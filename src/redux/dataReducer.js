import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const $instance = axios.create({
    baseURL: 'http://146.190.118.121/api',
  });

export const requestDataThunk = createAsyncThunk(
  'data/getAll',
  async (_, thunkApi) => {
    try {
      const { data } = await $instance.get('/table');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const addContactThunk = createAsyncThunk(
//   'contacts/addContactThunk',
//   async (contactData, thunkApi) => {
//     try {
//       const { data } = await $instance.post('/contacts', contactData);
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContactThunk = createAsyncThunk(
//   'contacts/deleteContactThunk',
//   async (id, thunkApi) => {
//     try {
//       const { data } = await $instance.delete(`/contacts/${id}`);
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const editContactThunk = createAsyncThunk(
//   'contacts/editContactThunk',
//   async ({id, newContactData}, thunkApi) => {
//     try {
//       const {data} = await $instance.patch(`/contacts/${id}`, newContactData);
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// )

const initialState = {
  data: null,
  isLoading: null,
  error: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
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
    //   // ======ADD CONTACT
    //   // .addCase(addContactThunk.pending, (state) => {

    //   // })
    //   .addCase(addContactThunk.fulfilled, (state, action) => {
    //     state.contacts.push(action.payload);
    //   })
    //   .addCase(addContactThunk.rejected, (state, action) => {
    //     state.error = action.payload;
    //   })
    //   // ======DELETE CONTACT
    //   // .addCase(addContactThunk.pending, (state) => {

    //   // })
    //   .addCase(deleteContactThunk.fulfilled, (state, action) => {
    //     const index = state.contacts.findIndex(
    //       contact => contact.id === action.payload.id
    //     );
    //     state.contacts.splice(index, 1);
    //   })
    //   .addCase(deleteContactThunk.rejected, (state, action) => {
    //     state.error = action.payload;
    //   })
    //   // ======EDIT CONTACT
    //   .addCase(editContactThunk.fulfilled, (state, action) => {
    //     const index = state.contacts.findIndex(
    //       contact => contact.id === action.payload.id
    //     );
    //     state.contacts.splice(index, 1, action.payload);
    //   })
    //   .addCase(editContactThunk.rejected, (state, action) => {
    //     state.error = action.payload;
    //   })
});

export const selectUserData = state => state.data.data;
export const selectDataIsLoading = state => state.data.isLoading;
export const selectDataError = state => state.data.error;

export const dataReducer = dataSlice.reducer;