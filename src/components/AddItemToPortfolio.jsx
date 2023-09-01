import { Add } from "@mui/icons-material";
import { Typography, useTheme } from "@mui/material";
import React from "react";

export const AddItemToPortfolio = ({ onClick, isAddPortfolioBoxOpen }) => {
  const theme = useTheme();
  return (
    <div
      className="create-portfolio"
      style={{
        border: "2px dotted",
        borderColor: theme.palette.primary.main,
        borderRadius: "2vw",
        backgroundColor: isAddPortfolioBoxOpen
          ? theme.palette.primary.main
          : null,
        color: isAddPortfolioBoxOpen ? theme.palette.text.secondary : null,
        width: "20dvw",
        height: "10dvh",
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyItems: "baseline",
          gap: 10,
        }}
      >
        <Add />
        <Typography variant="h5">Create Portfolio</Typography>
      </div>
    </div>
  );
};
