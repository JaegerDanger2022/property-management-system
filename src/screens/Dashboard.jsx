import React from "react";
import { ActionButton } from "../components/ActionButton";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        gap: "2vw",
      }}
    >
      <div>
        <ActionButton
          label="Add Property"
          handleAction={() => navigate("addProperty")}
        />
      </div>
      <div>
        <ActionButton
          label="All Properties"
          handleAction={() => navigate("allProperties")}
        />
      </div>
    </div>
  );
};
