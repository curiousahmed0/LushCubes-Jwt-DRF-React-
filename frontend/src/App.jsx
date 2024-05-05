import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserLoginScreen from "./pages/user/userLoginScreen";
import AdminLoginScreen from "./pages/admin/adminLoginScreen";
import UserLayout from "./pages/user/userLayout";
import UserHome from "./pages/user/userHome";
import UserPatientRegistration from "./pages/user/userPatientRegistration";
import UserRecord from "./pages/user/userRecord";
import UserServices from "./pages/user/userServices";
import UserCashTally from "./pages/user/userCashTally";
import UserUserEdit from "./pages/user/userUserEdit";
import ProtectedRoute from "./components/protected";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLoginScreen />,
  },
  {
    path: "user/home/",
    element: (
      <ProtectedRoute>
        <UserLayout>
          <UserHome />
        </UserLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "user/registration/",
    element: (
      <ProtectedRoute>
        <UserLayout>
          <UserPatientRegistration />
        </UserLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "user/record/",
    element: (
      <ProtectedRoute>
        <UserLayout>
          <UserRecord />
        </UserLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "user/services/",
    element: (
      <ProtectedRoute>
        <UserLayout>
          <UserServices />
        </UserLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "user/cashTally/",
    element: (
      <ProtectedRoute>
        <UserLayout>
          <UserCashTally />
        </UserLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "user/editUser/",
    element: (
      <ProtectedRoute>
        <UserLayout>
          <UserUserEdit />
        </UserLayout>
      </ProtectedRoute>
    ),
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
