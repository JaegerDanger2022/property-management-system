import { Typography, useTheme } from "@mui/material";
import React from "react";

export const PortfolioPropertyCard = ({ properties, name, date_added }) => {
  const theme = useTheme();

  return (
    <div>
      <Typography sx={{ fontSize: "2rem", color: theme.palette.text.primary }}>
        Portfolio Name: {name}
      </Typography>
      <Typography
        sx={{ fontSize: "1.3rem", color: theme.palette.text.primary }}
      >
        Date Created: {date_added}
      </Typography>
      <div style={{ display: "flex", flexDirection: "row", gap: "2dvw" }}>
        {properties.map((item) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                border: "2px solid",
                borderColor: theme.palette.primary.main,
                borderRadius: "2dvw",
                width: "30dvw",
                height: "60dvh",
                paddingLeft: "2dvw",
                paddingRight: "2dvw",
              }}
            >
              <Typography
                sx={{ fontSize: "1.3rem", color: theme.palette.text.primary }}
              >
                Property Name: {item.name}
              </Typography>
              <Typography
                sx={{ fontSize: "1.3rem", color: theme.palette.text.primary }}
              >
                Property Address: {item.address}
              </Typography>
              <Typography
                sx={{ fontSize: "1.3rem", color: theme.palette.text.primary }}
              >
                Total Units: {item.numberOfUnits}
              </Typography>
              <Typography
                sx={{ fontSize: "1.3rem", color: theme.palette.text.primary }}
              >
                Available Units: {item.availableUnits}
              </Typography>
              {/* images */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                {/* display the first image */}
                <img
                  src={item.propertyImages[0]}
                  style={{
                    width: "20dvw",
                    height: "20dvh",
                    paddingBottom: "1dvh",
                  }}
                />
                <div style={{ display: "flex", gap: "2dvw" }}>
                  {/* display the others */}
                  {item.propertyImages.slice(1).map((imageSrc) => (
                    <img
                      key={imageSrc} // Don't forget to add a unique key for each image
                      src={imageSrc}
                      style={{ width: "15dvw", height: "15dvh" }}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
