import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router.jsx";
import { ProtectedRouteProvider } from "./context/ProtectedRouteContext";
import { AuthContextProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProtectedRouteProvider>
        <RouterProvider router={router} />
      </ProtectedRouteProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
