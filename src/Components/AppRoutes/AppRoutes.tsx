import { Route, Routes } from "react-router-dom";
import Forage from "../../Pages/Forage/Forage";
import Wood from "../../Pages/Wood/Wood";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/wood" element={<Wood />} />
      <Route path="/" element={<Wood />} />
    </Routes>
  );
};

export default AppRoutes;
