import { createSlice } from '@reduxjs/toolkit';
const initialState ={
    user:null
};
const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            console.log(action.payload.user)
            state.user = action.payload.user;
          },
        removeUser: (state, action) => {
            state.user = null;
          }
    },
});
export const { setUser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;