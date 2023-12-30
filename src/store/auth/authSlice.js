import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/api";
import { failed, idle, loading, succeeded } from "../../constants/store";
import { wrongEmailPassword } from "../../constants/messages";

const initialState = {
  status: "idle",
  data: undefined,
  error: undefined,
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    const response = await api.post(`/identities/login`, {
      email: email,
      password: password,
    });
    return { ...response.data, email: email };
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleLoginForm: (state) => {
      state.showLoginForm = !state.showLoginForm;
    },
    unmounte: (state) => {
      state.status = idle;
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = loading;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = succeeded;
        state.data = action.payload;
        const { token, refresh_token, email } = action.payload;
        localStorage.setItem("token", token);
        localStorage.setItem("refresh_token", refresh_token);
        localStorage.setItem("email", email);
      })
      .addCase(login.rejected, (state, action) => {
        state.status = failed;
        state.error = wrongEmailPassword;
      });
  },
});

export const { toggleLoginForm, unmounte } = authSlice.actions;

export default authSlice.reducer;
