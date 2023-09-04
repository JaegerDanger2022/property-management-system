import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddProperty } from "./screens/AddProperty";
import { AllProperties } from "./screens/AllProperties";
import { Dashboard } from "./screens/Dashboard";
import { Portfolio } from "./screens/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="addProperty" element={<AddProperty />} />
        <Route path="allProperties" element={<AllProperties />} />
        <Route path="portfolio/:portfoliokey" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
