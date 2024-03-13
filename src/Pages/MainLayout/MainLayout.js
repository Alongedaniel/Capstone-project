import { Box, Container, Stack } from "@mui/material";
import React from "react";
// import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <Stack bgcolor="#f9f9f9">
      <Container maxWidth="xl" disableGutters>
        {/* <Navbar /> */}
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
