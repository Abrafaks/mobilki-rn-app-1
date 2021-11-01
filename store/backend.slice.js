import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ip: "192.168.1.88",
};

export const backendSlice = createSlice({
  name: "backend",
  initialState,
  reducers: {},
});

export const backendActions = backendSlice.actions;
