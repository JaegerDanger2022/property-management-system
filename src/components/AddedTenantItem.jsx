import { AccountCircle, LocationCity } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";

export const AddedTenantItem = ({
  name,
  handleOpenTenantItem,
  handleDeleteTenantItem,
}) => {
  return (
    <div
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "1fr 9fr 2fr  ",
        width: "20dvw",
        gap: 5,
        marginBottom: "1dvw",
        border: "1px solid #23272e",
      }}
    >
      <AccountCircle />
      <div onClick={handleOpenTenantItem} className="portfolio-name">
        Name: {name}
      </div>
      <div
        onClick={handleDeleteTenantItem}
        style={{
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography className="remove-icon">Delete</Typography>
        {/* <Remove className="remove-icon" /> */}
      </div>
    </div>
  );
};
