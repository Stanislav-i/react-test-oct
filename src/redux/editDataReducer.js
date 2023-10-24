import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dataId: null,
    editData: null,
}

export const editSlice = createSlice({
    name: 'edit',
    initialState,
    reducers: {
        setId: (state, action) => {
           state.dataId = action.payload
        },
        setEditData: (state, action) => {
            state.editData = action.payload
        },
    }
})

export const {setId, setEditData} = editSlice.actions;
export const editReducer = editSlice.reducer;
export const selectEditDataId = state => state.edit.dataId; 
export const selectEditData = state => state.edit.editData;