import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Forage from "../../pages/Forage/Forage";
import Inventory from "../../pages/Inventory/Inventory";
import Wood from "../../pages/Wood/Wood";
import LeftNav from "../LeftNav/LeftNav";

const AppRoutes = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavOpen = () => {
    setIsNavOpen(true);
  };

  const handleNavClose = () => {
    setIsNavOpen(false);
  };

  return (
    <div style={{ display: "flex" }}>
      <LeftNav
        isNavOpen={isNavOpen}
        handleOpen={handleNavOpen}
        handleClose={handleNavClose}
      />
      <div
        style={{
          flex: 1,
          marginLeft: isNavOpen ? "200px" : "64px",
          transition: "margin-left 0.3s ease",
        }}
      >
        <Routes>
          <Route path="/forage" element={<Forage />} />
          <Route path="/wood" element={<Wood />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/" element={<Wood />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppRoutes;
