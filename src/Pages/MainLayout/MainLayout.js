import { Box, Container, Stack } from "@mui/material";
import React, {useState, useEffect} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import {useNavigate, Navigate} from 'react-router-dom'
import useSelectors from "../../app/selectors";

const MainLayout = ({ children, authenticated, user }) => {
  const navigate = useNavigate()
  const { dispatch, loading, type } = useSelectors();
    useEffect(() => {
    if (!authenticated) {
      navigate("/login")
    }
  }, [authenticated, loading])
  console.log(authenticated)

  return (!authenticated ? <Navigate  to="/login" /> : 
    <Stack bgcolor="#f9f9f9">
      <Container maxWidth="xl" disableGutters>
        <Navbar authenticated={authenticated} user={user} />
        <Box>
          {/* <Stack height="1px" bgcolor="#f1f1f1"></Stack> */}
          {children}
        </Box>
        <Footer />
      </Container>
    </Stack>
  );
};

export default MainLayout;
