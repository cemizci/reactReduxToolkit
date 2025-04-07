import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  updateItem: null,
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    createDataFunc: (state, action) => {
      state.data = [...state.data, action.payload]
    },
    deleteDataFunc: (state, action) => {
      state.data = [...state.data.filter(dt => dt.id != action.payload)]
    },
    updateDataFunc: (state, action) => {
      state.data = [...state.data.map(dt => dt.id == action.payload.id ? ({...dt, ...action.payload}) : dt)]
    },
    setUpdateItem: (state, action) => {
      state.updateItem = action.payload;
    },
    clearUpdateItem: (state) => {
      state.updateItem = null;
    }
  },
})

// Action creators are generated for each case reducer function
export const { createDataFunc, deleteDataFunc, updateDataFunc, setUpdateItem, clearUpdateItem } = dataSlice.actions

export default dataSlice.reducer