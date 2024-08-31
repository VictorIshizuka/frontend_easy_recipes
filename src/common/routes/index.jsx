import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import { Signed } from "./signed";
import { NotSigned } from "./not-signed";
import { ListRecipes } from "../../modules/recipes/pages/List";
import { Item } from "../../modules/recipes/pages/Item";
import { Navbar } from "../components/Navbar";

export const RoutesApp = () => {
  const userInfo = useSelector(state => state.auth.userInfo);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<ListRecipes />} />
          <Route path="/item/:id" element={<Item />} />
          <Route
            path="/*"
            element={userInfo !== null ? <Signed /> : <NotSigned />}
          />
        </Route>

        <Route path="/not-found" element={<p>not found</p>} />
      </Routes>
    </BrowserRouter>
  );
};
