import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user.slice";
import { toggleSlice } from "./toggle.slice";
import { backendSlice } from "./backend.slice";
import { errorSlice } from "./error.slice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    toggle: toggleSlice.reducer,
    backend: backendSlice.reducer,
    error: errorSlice.reducer,
  },
});
