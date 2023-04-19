import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'checking', //authenticated . 'non-authenticated'
  user: {},
  errorMesage: undefined
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onChecking: ( state ) => {
        state.status = 'checking';
        state.user   = {};
        state.errorMesage = undefined;
    },
    onLogin: ( state, { payload } ) => {
        state.status = 'authenticated';
        state.user   = payload;
        state.errorMesage = undefined;
    },
    
  },
});

export const { checking, onLogin } = authSlice.actions;