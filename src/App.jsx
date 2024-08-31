import { Provider } from "react-redux";
import { RoutesApp } from "./common/routes";
import { store } from "./common/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <RoutesApp />
    </Provider>
  );
}

export default App;
