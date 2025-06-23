import AuthReducer from "./slice/auth.slice";
import UserSlice from "./slice/user.slice";
// import ProfileSlice from "./slice/companyProfile";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const reducer = combineReducers({
  auth: AuthReducer,
  user: UserSlice,
  // profile: ProfileSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
});

export default store;
