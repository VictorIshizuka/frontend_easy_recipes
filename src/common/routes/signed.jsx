import { Navigate, Route, Routes } from "react-router-dom";

export const Signed = () => {
  return (
    <Routes>
      <Route path="/form" element={<p>form create</p>} />
      <Route path="/form/:id" element={<p>esqueceu a senha</p>} />
      <Route path="/*" element={<Navigate replace to="/not-found" />} />
    </Routes>
  );
};
