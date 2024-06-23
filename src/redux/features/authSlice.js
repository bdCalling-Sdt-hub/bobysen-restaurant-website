import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

// selectors
export const selectUser = (state) => state.auth.user;

export const {} = authSlice.actions;

export default authSlice.reducer;
