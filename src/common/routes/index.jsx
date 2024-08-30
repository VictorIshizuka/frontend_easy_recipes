import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "../store";

import { Signed } from "./signed";
import { NotSigned } from "./not-signed";

import { ListRecipes } from "../../modules/recipes/pages/List";
import { Navbar } from "../components/Navbar";

export const RoutesApp = () => {
  const isLogged = true;
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<ListRecipes />} />
            <Route path="/*" element={isLogged ? <Signed /> : <NotSigned />} />
          </Route>

          <Route path="/not-found" element={<p>not found</p>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
