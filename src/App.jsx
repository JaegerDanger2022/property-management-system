import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddProperty } from "./screens/AddProperty";
import { AllProperties } from "./screens/AllProperties";
import { Dashboard } from "./screens/Dashboard";
import { Portfolio } from "./screens/Portfolio";
import { PropertyDetails } from "./screens/PropertyDetails";
import { TemporalNavBar } from "./components/TemporalNavBar";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TemporalNavBar />
      </div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="addProperty" element={<AddProperty />} />
        <Route path="allProperties" element={<AllProperties />} />
        <Route path="portfolio/:portfoliokey" element={<Portfolio />} />
        <Route
          path="propertyDetails/:propertyKey"
          element={<PropertyDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
