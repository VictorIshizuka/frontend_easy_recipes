import { Route, Routes } from "react-router-dom";

export const RoutesRecipes = () => {
  return (
    <Routes>
      <Route path="/form" element={<p>form create</p>} />
      <Route path="/form/:id" element={<p>esqueceu a senha</p>} />
    </Routes>
  );
};
