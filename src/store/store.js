import { configureStore } from '@reduxjs/toolkit'
import { realEstateSlice } from './realEstate/realEstateSlice'
import { authSlice } from './auth/authSlice'

export const store = configureStore({
  reducer: {
    realEstate: realEstateSlice.reducer,
    auth: authSlice.reducer
  },
})