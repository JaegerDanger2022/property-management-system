import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </ThemeProvider>
  </React.StrictMode>
);
