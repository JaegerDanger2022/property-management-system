import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  propertyName: "",
  propertyAddress: "",
  propertyNumberOfUnits: "",
  propertyAvailableUnits: "",
  propertyKey: "",
  propertyDateAdded: "",
  propertyImages: [],
};

export const PropertyDetailsSlice = createSlice({
  name: "propertyDetails",
  initialState,
  reducers: {
    setPropertyDetailsName: (state, action) => {
      state.propertyName = action.payload;
    },
    setPropertyDetailsAddress: (state, action) => {
      state.propertyAddress = action.payload;
    },
    setPropertyDetailsNumberOfUnits: (state, action) => {
      state.propertyNumberOfUnits = action.payload;
    },
    setPropertyDetailsAvailableUnits: (state, action) => {
      state.propertyAvailableUnits = action.payload;
    },
    setPropertyDetailsKey: (state, action) => {
      state.propertyKey = action.payload;
    },
    setPropertyDetailsDateAdded: (state, action) => {
      state.propertyDateAdded = action.payload;
    },
    setPropertyDetailsImages: (state, action) => {
      state.propertyImages = action.payload;
    },
  },
});

export const {
  setPropertyDetailsName,
  setPropertyDetailsAddress,
  setPropertyDetailsNumberOfUnits,
  setPropertyDetailsAvailableUnits,
  setPropertyDetailsKey,
  setPropertyDetailsDateAdded,
  setPropertyDetailsImages,
} = PropertyDetailsSlice.actions;

export const property_name = (state) => state.propertyDetails.propertyName;
export const property_address = (state) =>
  state.propertyDetails.propertyAddress;
export const property_numberOfUnits = (state) =>
  state.propertyDetails.propertyNumberOfUnits;
export const property_availableUnits = (state) =>
  state.propertyDetails.propertyAvailableUnits;
export const property_key = (state) => state.propertyDetails.propertyKey;
export const property_date_added = (state) =>
  state.propertyDetails.propertyDateAdded;
export const property_images = (state) => state.propertyDetails.propertyImages;
