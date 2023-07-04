import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Components/AppRoutes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
