import { Button } from "@mui/material";
import React from "react";

export const ActionButton = ({ label, handleAction }) => {
  return (
    <Button variant="contained" onClick={handleAction}>
      {label}
    </Button>
  );
};
