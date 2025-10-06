import { BrowserRouter, Route, Routes } from "react-router-dom";
import FarmersHomePage from "../modules/farmers/ui/pages/Home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FarmersHomePage />} />

        <Route path="/farmers">
          <Route
            path="/farmers/:id"
            element={null}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}