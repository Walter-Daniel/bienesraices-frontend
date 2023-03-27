import { configureStore } from '@reduxjs/toolkit'
import { realEstateSlice } from './realEstate/realEstateSlice'

export const store = configureStore({
  reducer: {
    realEstate: realEstateSlice.reducer,
  },
})