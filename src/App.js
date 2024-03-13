import React from "react";
import {
  // Container,
  // Typography,
  CssBaseline,
  ThemeProvider,
  // Stack,
  // Button,
} from "@mui/material";
import { store } from "./app/store";
import './App.css'

// import { fetchUsers } from "./features/users/userSlice";
import { theme } from "./Theme/Theme";
// import MainLayout from "./Pages/MainLayout/MainLayout";
import PrivateRoutes from "./Routing/Routes";

function App() {
  console.log("initialState:", store.getState());
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PrivateRoutes />
    </ThemeProvider>
  );
}

export default App;
