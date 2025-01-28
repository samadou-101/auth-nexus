import { configureStore } from "@reduxjs/toolkit";
import authTabReducer from "./slices/authTabSlice";
const store = configureStore({
  reducer: {
    authOption: authTabReducer,
  },
});
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export default store;
