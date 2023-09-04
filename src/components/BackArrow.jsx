import { ArrowBack } from "@mui/icons-material";
import { useTheme } from "@mui/material";
import React from "react";

import { useNavigate } from "react-router-dom";
export const BackArrow = ({ screen }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <ArrowBack
      onClick={() => navigate(screen)}
      sx={{ fontSize: "3rem", color: theme.palette.text.primary }}
      className="back_arrow"
    />
  );
};
