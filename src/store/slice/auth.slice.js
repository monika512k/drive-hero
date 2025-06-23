import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token:
   !!localStorage.getItem('token')
    ? localStorage.getItem('token')
    : null,
  role:"",
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
        console.log(action.payload.token);
        state.token = action.payload.token;
        state.role = action.payload.role;
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('role', action.payload.role);
    },
    logout: (state, action) => {
      state.token = null;
      localStorage.removeItem('token');
    },
  },
});

export const { setCredentials, logout } = AuthSlice.actions;

export default AuthSlice.reducer;