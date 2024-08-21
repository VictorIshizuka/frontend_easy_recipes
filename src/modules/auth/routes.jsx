import { Route, Routes } from "react-router-dom";

export const RoutesAuth = () => {
  return (
    <Routes>
      <Route path="/login" element={<div className="col">login</div>} />
      <Route
        path="/forgot-password"
        element={<div className="col">forgot</div>}
      />
      <Route
        path="/reset-password"
        element={<div className="col">reset</div>}
      />
      <Route path="/register" element={<div className="col">register</div>} />
    </Routes>
  );
};
