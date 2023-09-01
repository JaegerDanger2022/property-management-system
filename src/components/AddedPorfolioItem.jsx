import { Remove } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";

export const AddedPorfolioItem = ({ name, address, onClick }) => {
  return (
    <div
      className="added-portfolio-item"
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "start",
        gridTemplateColumns: "1fr 1fr 0.5fr",
        width: "25dvw",
        gap: 5,
        marginBottom: "1dvw",
        border: "none",
        borderBottom: "1px solid white",
      }}
      onClick={onClick}
    >
      <div
        style={{
          paddingRight: "1dvw",
          display: "flex",
          justifyContent: "start",
        }}
      >
        Name: {name}
      </div>
      <div
        style={{
          paddingRight: "1dvw",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        Address: {address}
      </div>
      <div>
        <Typography sx={{ color: "red" }}>Remove</Typography>
      </div>
    </div>
  );
};
