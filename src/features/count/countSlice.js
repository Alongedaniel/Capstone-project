import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  currentUser: JSON.parse(localStorage.getItem("user")), //This holds the list of users. I would not be needing that outside this file
  error: "",
  authenticatedUser: null,
  authenticated: false,
};

const countSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("user", JSON.stringify(state.users));
    },
    loginUser: (state) => {
      state.authenticated = true;
    },
  },
});

export const { incrementCount, createUser, loginUser } = countSlice.actions;

export default countSlice.reducer;
