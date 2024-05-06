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
import AdminLayout from "./pages/admin/adminLayout";
import AdminHome from "./pages/admin/adminHome";
import AdminAddUser from "./pages/admin/adminAddUser";
import AdminViewUser from "./pages/admin/adminViewUser";
import AdminEditUser from "./pages/admin/adminEditUser";
import AdminAddPatient from "./pages/admin/adminAddPatient";
import AdminViewPatient from "./pages/admin/adminViewPatient";
import AdminEditPatient from "./pages/admin/adminEditPatient";
import AdminViewSlips from "./pages/admin/adminViewSlips";
import AdminEditSlips from "./pages/admin/adminEditSlips";
import AdminViewCashTallies from "./pages/admin/adminViewCashTallies";
import AdminAddService from "./pages/admin/adminAddService";
import AdminViewService from "./pages/admin/adminViewService";
import AdminEditService from "./pages/admin/adminEditService";

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
  {
    path: "admin/home/",
    element: (
      <AdminLayout>
        <AdminHome />
      </AdminLayout>
    ),
  },
  {
    path: "admin/userAdd/",
    element: (
      <AdminLayout>
        <AdminAddUser />
      </AdminLayout>
    ),
  },
  {
    path: "admin/userView/",
    element: (
      <AdminLayout>
        <AdminViewUser />
      </AdminLayout>
    ),
  },
  {
    path: "admin/userEdit/",
    element: (
      <AdminLayout>
        <AdminEditUser />
      </AdminLayout>
    ),
  },
  {
    path: "admin/patientAdd/",
    element: (
      <AdminLayout>
        <AdminAddPatient />
      </AdminLayout>
    ),
  },
  {
    path: "admin/patientView/",
    element: (
      <AdminLayout>
        <AdminViewPatient />
      </AdminLayout>
    ),
  },
  {
    path: "admin/patientEdit/",
    element: (
      <AdminLayout>
        <AdminEditPatient />
      </AdminLayout>
    ),
  },
  {
    path: "admin/slipView/",
    element: (
      <AdminLayout>
        <AdminViewSlips />
      </AdminLayout>
    ),
  },
  {
    path: "admin/slipEdit/",
    element: (
      <AdminLayout>
        <AdminEditSlips />
      </AdminLayout>
    ),
  },
  {
    path: "admin/cashView/",
    element: (
      <AdminLayout>
        <AdminViewCashTallies />
      </AdminLayout>
    ),
  },
  {
    path: "admin/serviceAdd/",
    element: (
      <AdminLayout>
        <AdminAddService />
      </AdminLayout>
    ),
  },
  {
    path: "admin/serviceView/",
    element: (
      <AdminLayout>
        <AdminViewService />
      </AdminLayout>
    ),
  },
  {
    path: "admin/serviceEdit/",
    element: (
      <AdminLayout>
        <AdminEditService />
      </AdminLayout>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
