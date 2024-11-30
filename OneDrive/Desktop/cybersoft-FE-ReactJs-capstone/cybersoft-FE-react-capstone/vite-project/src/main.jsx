import { createRoot } from "react-dom/client";
import "./index.scss";
import "flowbite/dist/flowbite.min.js";
import App from "./App.jsx";
import store from "./store/index.js";
import { Provider } from "react-redux";


createRoot( document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

//