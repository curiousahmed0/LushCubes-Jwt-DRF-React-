import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserLoginScreen from "./pages/user/userLoginScreen";
import AdminLoginScreen from "./pages/admin/adminLoginScreen";
import UserLayout from "./pages/user/userLayout";
import UserHome from "./pages/user/userHome";
import UserPatientRegistration from "./pages/user/userPatientRegistration";
import UserCreateNewPatient from "./pages/user/userCreateNewPatient";
import UserRecord from "./pages/user/userRecord";
import UserServices from "./pages/user/userServices";
import UserCashTally from "./pages/user/userCashTally";
import UserUserEdit from "./pages/user/userUserEdit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLoginScreen />,
  },
  {
    path: "user/home/",
    element: (
      <UserLayout>
        <UserHome />
      </UserLayout>
    ),
  },
  {
    path: "user/registration/",
    element: (
      <UserLayout>
        <UserPatientRegistration />
      </UserLayout>
    ),
  },
  {
    path: "user/record/",
    element: (
      <UserLayout>
        <UserRecord />
      </UserLayout>
    ),
  },
  {
    path: "user/services/",
    element: (
      <UserLayout>
        <UserServices />
      </UserLayout>
    ),
  },
  {
    path: "user/cashTally/",
    element: (
      <UserLayout>
        <UserCashTally />
      </UserLayout>
    ),
  },
  {
    path: "user/editUser/",
    element: (
      <UserLayout>
        <UserUserEdit />
      </UserLayout>
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
