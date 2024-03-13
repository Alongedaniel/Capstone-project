import { Modal, Stack, Typography } from "@mui/material";
import React from "react";

const Popup = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Stack
        width="80%"
        position="absolute"
        top="50%"
        left="50%"
        sx={{ transform: "translate(-50%, -50%)" }}
        height="200px"
        bgcolor="#fff"
        justifyContent="center"
        alignItems="center"
      >
        <Typography fontSize="20px">This Feature is coming soon!!!</Typography>
      </Stack>
    </Modal>
  );
};

export default Popup;
