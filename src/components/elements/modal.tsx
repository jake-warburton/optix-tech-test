import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import React from "react";

interface ModalProps {
  showModal: boolean;
  onClose: () => void;
  heading: string;
  children: any;
}

const Modal: React.FC<ModalProps> = ({
  showModal,
  onClose,
  heading,
  children,
}) => {
  return (
    <Dialog fullWidth maxWidth="md" open={showModal} onClose={onClose}>
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
