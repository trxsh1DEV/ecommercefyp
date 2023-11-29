import { createSlice } from "@reduxjs/toolkit";
import { Users } from "./types";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [] as Users[],
    isFetching: false,
    error: false,
  },
  reducers: {
    getUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getUserSuccess: (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
    },
    getUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { getUserFailure, getUserStart, getUserSuccess } =
  usersSlice.actions;

export default usersSlice.reducer;
