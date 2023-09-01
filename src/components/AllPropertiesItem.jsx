import { Typography } from "@mui/material";
import React from "react";

export const AllPropertiesItem = ({
  name,
  address,
  numberOfUnits,
  availableUnits,
  onDragStart,
  id,
}) => {
  return (
    <div className="property-item" draggable onDragStart={onDragStart} id={id}>
      <div
        style={{
          paddingLeft: "1dvw",
          border: "none",
          borderRight: "1px solid white",
        }}
      >
        <Typography>Property Name: {name}</Typography>
      </div>
      <div
        style={{
          paddingLeft: "2dvw",
          border: "none",
          borderRight: "1px solid white",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        <Typography>Property Address: {address}</Typography>
      </div>
      <div
        style={{
          paddingLeft: "2dvw",
          border: "none",
          borderRight: "1px solid white",
        }}
      >
        <Typography>Total Units: {numberOfUnits}</Typography>
      </div>
      <div
        style={{
          paddingLeft: "2dvw",
        }}
      >
        <Typography> Available Units: {availableUnits}</Typography>
      </div>
    </div>
  );
};
