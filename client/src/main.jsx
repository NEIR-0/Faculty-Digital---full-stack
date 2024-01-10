import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import LoginPages from "./pages/login.jsx";
import MainPages from "./pages/mainPages.jsx";
import Dashboard from "./pages/dashboard.jsx";
import DetailPages from "./pages/detail.jsx";

// authentication
const auth = () => {
  if (!localStorage.token) {
    return redirect("/login");
  }
  return null;
};

// router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <LoginPages />,
      },
      {
        path: "",
        element: <MainPages />,
        loader: auth,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "detail",
            element: <DetailPages />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
