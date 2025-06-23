import { createSlice } from '@reduxjs/toolkit';
const initialState ={
    profile:null
};
const ProfileSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setProfile: (state, action) => {
            console.log("company profile",action.payload);
            state.profile = action.payload;
          },
        removeProfile: (state, action) => {
            state.profile = null;
          }
    },
});
export const { setProfile, removeProfile } = ProfileSlice.actions;
export default ProfileSlice.reducer;