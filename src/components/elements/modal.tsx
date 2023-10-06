import { Box, Dialog, DialogTitle, DialogContent } from "@mui/material";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import Button from "../elements/button";

interface ModalProps {
  showModal: boolean;
  onClose: () => void;
  mobileOnly: boolean;
  heading: string;
  id: string;
  children: any;
}

const Modal: React.FC<ModalProps> = ({
  showModal,
  onClose,
  mobileOnly = false,
  heading,
  id,
  children,
}) => {
  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={showModal}
      onClose={onClose}
      data-testid={id}
      style={{
        display: `${
          mobileOnly && useMediaQuery("(min-width: 768px)") ? "none" : "inherit"
        }`,
      }}
    >
      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button variant="outlined" color="primary" onClick={onClose}>
          ✖
        </Button>
      </Box>
      <DialogTitle align="center" fontWeight={600}>
        {heading}
      </DialogTitle>
      <DialogContent
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
