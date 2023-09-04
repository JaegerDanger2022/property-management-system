import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/lib/persistReducer";
import { combineReducers } from "@reduxjs/toolkit";
// slices
import { OpenPortfolioItemSlice } from "../features/OpenPortfolioItemSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  openportfolioitem: OpenPortfolioItemSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false, // Turn off the serializable check
  }),
});

export { store };
