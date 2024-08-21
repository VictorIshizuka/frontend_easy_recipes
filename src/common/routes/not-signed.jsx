import { Navigate, Route, Routes } from "react-router-dom";
import { ListRecipes } from "../../modules/recipes/List";

export const NotSigned = () => {
  return (
    <Routes>
      <Route path="/login" element={<p>login</p>} />
      <Route path="/forgot-password" element={<p>esqueceu senha</p>} />
      <Route path="/reset-password" element={<p>resetar senha</p>} />
      <Route path="/" element={<ListRecipes />} />
      <Route path="/*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};
