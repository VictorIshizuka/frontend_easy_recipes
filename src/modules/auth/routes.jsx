import { Route, Routes } from "react-router-dom";

import { FormLogin } from "./pages/FormLogin";
import { FormRegister } from "./pages/FormRegister";

export const RoutesAuth = () => {
  return (
    <Routes>
      <Route path="/login" element={<FormLogin />} />
      <Route
        path="/forgot-password"
        element={<div className="col">forgot</div>}
      />
      <Route
        path="/reset-password"
        element={<div className="col">reset</div>}
      />
      <Route path="/register" element={<FormRegister />} />
    </Routes>
  );
};
