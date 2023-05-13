import { Route, Routes } from "react-router-dom";
import MainPage from "../../pages/Main/MainPage";
import AutoParts from "../../pages/AutoParts/AutoParts";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<MainPage />} />
        <Route path="/parts" element={<AutoParts />} />
        <Route path="/parts/:mark" element={<AutoParts />} />
        <Route
          path="/parts/:mark/:model/:year/:product/:number/:article"
          element={<AutoParts />}
        />
      </Route>
    </Routes>
  );
};