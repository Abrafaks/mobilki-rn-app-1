import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user.slice";
import { toggleSlice } from "./toggle.slice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    toggle: toggleSlice.reducer,
  },
});
