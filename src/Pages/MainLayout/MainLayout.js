import { Box, Container, Stack } from "@mui/material";
import React, {useState, useEffect} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import {useNavigate, Navigate} from 'react-router-dom'

const MainLayout = ({ children, authenticated }) => {
  const navigate = useNavigate()
    useEffect(() => {
    if (!authenticated) {
      navigate("/login")
    }
  }, [])
  console.log(authenticated)

  return (
    <Stack bgcolor="#f9f9f9">
      <Container maxWidth="xl" disableGutters>
        <Navbar authenticated={authenticated} />
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
