import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  key: "",
  dateAdded: "",
  properties: [],
};

export const OpenPortfolioItemSlice = createSlice({
  name: "openportfolioitem",
  initialState,
  reducers: {
    setOpenPortfolioName: (state, action) => {
      state.name = action.payload;
    },
    setOpenPortfolioKey: (state, action) => {
      state.key = action.payload;
    },
    setOpenPortfolioDateAdded: (state, action) => {
      state.dateAdded = action.payload;
    },
    setOpenPortfolioProperties: (state, action) => {
      state.properties = action.payload;
    },
  },
});

export const {
  setOpenPortfolioName,
  setOpenPortfolioKey,
  setOpenPortfolioDateAdded,
  setOpenPortfolioProperties,
} = OpenPortfolioItemSlice.actions;

export const portfolio_name = (state) => state.openportfolioitem.name;
export const portfolio_key = (state) => state.openportfolioitem.key;
export const portfolio_date_added = (state) =>
  state.openportfolioitem.dateAdded;
export const portfolio_properties = (state) =>
  state.openportfolioitem.properties;
