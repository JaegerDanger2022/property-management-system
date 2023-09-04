import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const TemporalNavBar = () => {
  const navigate = useNavigate();
  const navButtons = [
    <Button key="one" onClick={() => navigate("/")}>
      Dashboard
    </Button>,
    <Button key="two" onClick={() => navigate("/addProperty")}>
      Add Property
    </Button>,
    <Button key="three" onClick={() => navigate("/allProperties")}>
      All Properties
    </Button>,
  ];
  return (
    <ButtonGroup size="large" aria-label="large button group">
      {navButtons}
    </ButtonGroup>
  );
};
