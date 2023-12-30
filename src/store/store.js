import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./main/mainSlice";
import authReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    main: mainReducer,
    auth: authReducer,
  },
});
