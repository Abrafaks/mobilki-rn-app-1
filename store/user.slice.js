import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: null,
  token: null,
  note: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      const { login } = action.payload;

      state.login = login;
    },
    addToken(state, action) {
      state.token = action.payload;
    },
    deleteToken(state) {
      state.token = null;
    },
    addNote(state, action) {
      state.note = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
