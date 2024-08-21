import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Signed } from "./signed";
import { NotSigned } from "./not-signed";

export const RoutesApp = () => {
  const isLogged = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={isLogged ? <Signed /> : <NotSigned />} />
        <Route path="/not-found" element={<p> not found</p>} />
      </Routes>
    </BrowserRouter>
  );
};
