import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showLoginForm: false,
  alert: {
    show: false,
    type: undefined,
    content: undefined,
  },
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    toggleLoginForm: (state) => {
      state.showLoginForm = !state.showLoginForm;
    },
    setAlert: (state, action) => {
      state.alert = action.payload;
    },
    resetAlert: (state) => {
      state.alert = {
        show: false,
        type: undefined,
        content: undefined,
      };
    },
  },
});

export const { toggleLoginForm, setAlert, resetAlert } = mainSlice.actions;

export default mainSlice.reducer;
