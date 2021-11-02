import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  register: false,
  login: true,
  changeNote: false,
  changePassword: false,
  disableSubmitButton: false,
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleRegister(state) {
      state.register = true;
      state.login = false;
      state.changeNote = false;
      state.changePassword = false;
    },
    toggleLogin(state) {
      state.register = false;
      state.login = true;
      state.changeNote = false;
      state.changePassword = false;
    },
    toggleChangeNote(state) {
      state.register = false;
      state.login = false;
      state.changeNote = true;
      state.changePassword = false;
    },
    toggleChangePassword(state) {
      state.register = false;
      state.login = false;
      state.changeNote = false;
      state.changePassword = true;
    },
    disableSubmitButton(state) {
      console.log("Disabling submit button");
      state.disableSubmitButton = true;
    },
    enableSubmitButton(state) {
      console.log("Enabling submit button");
      state.disableSubmitButton = false;
    },
  },
});

export const toggleActions = toggleSlice.actions;
