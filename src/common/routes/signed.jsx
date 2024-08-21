import { Navigate, Route, Routes } from "react-router-dom";
import { RoutesRecipes } from "../../modules/recipes/routes";

export const Signed = () => {
  return (
    <Routes>
      <Route path="/*" element={<RoutesRecipes />} />
      <Route path="/*" element={<Navigate replace to="/not-found" />} />
    </Routes>
  );
};
