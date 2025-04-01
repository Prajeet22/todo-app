import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  email: "",
  showEmailInput: false,
  showPopup: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.email = action.payload;
      state.showEmailInput = false;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.email = "";
    },
    setShowEmailInput: (state, action) => {
      state.showEmailInput = action.payload;
    },
    setShowPopup: (state, action) => {
      state.showPopup = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    }
  }
});

export const { login, logout, setEmail, setShowEmailInput, setShowPopup } = authSlice.actions;
export default authSlice.reducer;