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
      <ProtectedRoute>
        <AdminLayout>
          <AdminHome />
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin/userAdd/",
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <AdminAddUser />
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin/userView/",
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <AdminViewUser />
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin/userEdit/",
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <AdminEditUser />
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin/patientAdd/",
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <AdminAddPatient />
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin/patientView/",
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <AdminViewPatient />
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin/patientEdit/",
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <AdminEditPatient />
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin/slipView/",
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <AdminViewSlips />
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin/slipEdit/",
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <AdminEditSlips />
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin/cashView/",
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <AdminViewCashTallies />
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin/serviceAdd/",
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <AdminAddService />
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin/serviceView/",
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <AdminViewService />
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin/serviceEdit/",
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <AdminEditService />
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
