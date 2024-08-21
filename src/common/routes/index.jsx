import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Signed } from "./signed";
import { NotSigned } from "./not-signed";

import { Navbar } from "../components/navbar";
import { ListRecipes } from "../../modules/recipes/pages/List";
import { FilterList } from "../../modules/recipes/pages/Filter";

export const RoutesApp = () => {
  const isLogged = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route element={<FilterList />}>
            <Route path="/" element={<ListRecipes />} />
            <Route path="/*" element={isLogged ? <Signed /> : <NotSigned />} />
          </Route>
        </Route>

        <Route path="/not-found" element={<p>not found</p>} />
      </Routes>
    </BrowserRouter>
  );
};
