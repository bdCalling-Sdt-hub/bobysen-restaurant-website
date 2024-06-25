import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.accessToken = accessToken;
    },

    logout: (state) => {
      state.user = null;
      state.accessToken = null;
    },
  },
});

// selectors
export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.accessToken;

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
