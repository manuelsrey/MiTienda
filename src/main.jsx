import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import UserProvider from "./Contexts/UserContext.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/index.jsx"
import { Provider } from "react-redux";
import store from "./redux/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </Provider>
  </React.StrictMode>
);
