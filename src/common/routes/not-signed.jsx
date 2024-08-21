import { Navigate, Route, Routes } from "react-router-dom";

import { RoutesAuth } from "../../modules/auth/routes";

export const NotSigned = () => {
  return (
    <Routes>
      <Route path="/*" element={<RoutesAuth />} />
      <Route path="/*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};
