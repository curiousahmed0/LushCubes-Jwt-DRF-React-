import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserLoginScreen from "./pages/user/userLoginScreen";
import AdminLoginScreen from "./pages/admin/adminLoginScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLoginScreen />,
  },
  {
    path: "admin/",
    element: <AdminLoginScreen />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
