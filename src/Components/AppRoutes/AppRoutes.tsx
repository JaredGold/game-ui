import { Route, Routes } from "react-router-dom";
import Forage from "../../pages/Forage/Forage";
import Inventory from "../../pages/Inventory/Inventory";
import Wood from "../../pages/Wood/Wood";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/forage" element={<Forage />} />
      <Route path="/wood" element={<Wood />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/" element={<Wood />} />
    </Routes>
  );
};

export default AppRoutes;
