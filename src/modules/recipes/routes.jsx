import { Route, Routes } from "react-router-dom";
import { Form } from "./pages/Form";

export const RoutesRecipes = () => {
  return (
    <Routes>
      <Route path="/form" element={<Form />} />
      <Route path="/form/:id" element={<p>edit/show</p>} />
    </Routes>
  );
};
