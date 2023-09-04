import { Typography, useTheme } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setPropertyDetailsAddress,
  setPropertyDetailsAvailableUnits,
  setPropertyDetailsDateAdded,
  setPropertyDetailsImages,
  setPropertyDetailsKey,
  setPropertyDetailsName,
  setPropertyDetailsNumberOfUnits,
} from "../../app/features/propertyDetailsSlice";

export const PortfolioPropertyCard = ({ properties, name, date_added }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  //   Navigation
  const navigate = useNavigate();
  // function to navigate to  PropertyDetail Screen
  const handleNavigateToPropertyDetail = async (
    name,
    address,
    numberOfUnits,
    availableUnits,
    key,
    date_added,
    images
  ) => {
    await dispatch(setPropertyDetailsName(name));
    await dispatch(setPropertyDetailsAddress(address));
    await dispatch(setPropertyDetailsNumberOfUnits(numberOfUnits));
    await dispatch(setPropertyDetailsAvailableUnits(availableUnits));
    await dispatch(setPropertyDetailsKey(key));
    await dispatch(setPropertyDetailsDateAdded(date_added));
    await dispatch(setPropertyDetailsImages(images));
    // navigate to the details screen
    navigate(`/propertyDetails/:${key}`);
  };

  return (
    <div>
      <Typography sx={{ fontSize: "2rem", color: theme.palette.text.primary }}>
        <strong> Portfolio Name:</strong> {name}
      </Typography>
      <Typography
        sx={{ fontSize: "1.3rem", color: theme.palette.text.primary }}
      >
        <strong>Date Created:</strong> {date_added}
      </Typography>
      <div style={{ display: "flex", flexDirection: "row", gap: "2dvw" }}>
        {properties.map((item) => {
          return (
            <div
              key={item.key}
              onClick={() =>
                handleNavigateToPropertyDetail(
                  item.name,
                  item.address,
                  item.numberOfUnits,
                  item.availableUnits,
                  item.key,
                  item.dateAdded,
                  item.propertyImages
                )
              }
              className="portfolio_property_card"
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
                color: theme.palette.text.primary,
              }}
            >
              <Typography sx={{ fontSize: "1.3rem" }}>
                <strong>Property Name:</strong> {item.name}
              </Typography>
              <Typography sx={{ fontSize: "1.3rem" }}>
                <strong>Property Address:</strong> {item.address}
              </Typography>
              <Typography sx={{ fontSize: "1.3rem" }}>
                <strong>Total Units:</strong> {item.numberOfUnits}
              </Typography>
              <Typography sx={{ fontSize: "1.3rem" }}>
                <strong>Available Units:</strong> {item.availableUnits}
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
                      key={imageSrc}
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
