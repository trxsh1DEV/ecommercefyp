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

    deleteUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteUserSuccess: (state, action) => {
      state.isFetching = false;
      state.users.splice(
        state.users.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    userAddStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    userAddSuccess: (state, action) => {
      state.isFetching = false;
      state.users.push(action.payload);
    },
    userAddFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getUserFailure,
  getUserStart,
  getUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  userAddFailure,
  userAddStart,
  userAddSuccess,
} = usersSlice.actions;

export default usersSlice.reducer;
