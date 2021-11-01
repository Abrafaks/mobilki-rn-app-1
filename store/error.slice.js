import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: "",
};

const errorMessages = {
  401: "Wrong credentials.",
  0: "",
  unknown: "Error occurred. Please try again.",
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError(state, action) {
      switch (action.payload) {
        case 401:
          state.error = errorMessages["401"];
          break;
        case 0:
        case "":
          state.error = errorMessages["0"];
          break;
        default:
          state.error = errorMessages.unknown;
          break;
      }
    },
    setCustomError(state, action) {
      state.error = action.payload;
    },
  },
});

export const errorActions = errorSlice.actions;
