import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'checking', //authenticated . 'non-authenticated'
  user: {},
  message: undefined
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onChecking: ( state ) => {
        state.status = 'checking';
        state.user   = {};
        state.message = undefined;
    },
    onLogin: ( state, { payload } ) => {
        state.status = 'authenticated';
        state.user   = payload;
        state.message = undefined;
    },
    confirmToken: ( state, { payload }) => {
        state.message = payload
    }
    
  },
});

export const { checking, onLogin, confirmToken } = authSlice.actions;