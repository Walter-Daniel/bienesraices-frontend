import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSaving: false,
  messageSaved: '',
  houseToSold: [],
  active: null,
};

export const realEstateSlice = createSlice({
  name: 'realEstate',
  initialState,
  reducers: {
    startLoadingHouses: (state) => {
      state.messageSaved = 'hola desde el reducer'
    },
  },
});

export const { increment } = realEstateSlice.actions;