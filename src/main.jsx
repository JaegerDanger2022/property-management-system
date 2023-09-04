import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material";

// Redux
import persistStore from "redux-persist/es/persistStore";
import { store } from "../app/store/store.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2796ff",
    },
    secondary: {
      main: "#2796ff",
    },
    background: {
      paper: "#EDEBEB",
    },
    text: {
      primary: "#000000",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "#21194c",
      secondary: "#ffebee",
    },
  },
});

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
