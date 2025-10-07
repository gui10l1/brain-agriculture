import { BrowserRouter, Route, Routes } from "react-router-dom";
import FarmersHomePage from "../pages/Home";
import CreateFarmersPage from "../pages/CreateFarmers";
import DetailsFarmersPage from "../pages/FarmerDetails";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FarmersHomePage />} />

        <Route path="/farmers">
          <Route
            path="/farmers/create"
            element={<CreateFarmersPage />}
          />
          <Route
            path="/farmers/:id"
            element={<DetailsFarmersPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}