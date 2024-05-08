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
import AdminProtectedRoute from "./components/adminProtected";

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
      <AdminProtectedRoute>
        <AdminLayout>
          <AdminHome />
        </AdminLayout>
      </AdminProtectedRoute>
    ),
  },
  {
    path: "admin/userAdd/",
    element: (
      <AdminProtectedRoute>
        <AdminLayout>
          <AdminAddUser />
        </AdminLayout>
      </AdminProtectedRoute>
    ),
  },
  {
    path: "admin/userView/",
    element: (
      <AdminProtectedRoute>
        <AdminLayout>
          <AdminViewUser />
        </AdminLayout>
      </AdminProtectedRoute>
    ),
  },
  {
    path: "admin/userEdit/",
    element: (
      <AdminProtectedRoute>
        <AdminLayout>
          <AdminEditUser />
        </AdminLayout>
      </AdminProtectedRoute>
    ),
  },
  {
    path: "admin/patientAdd/",
    element: (
      <AdminProtectedRoute>
        <AdminLayout>
          <AdminAddPatient />
        </AdminLayout>
      </AdminProtectedRoute>
    ),
  },
  {
    path: "admin/patientView/",
    element: (
      <AdminProtectedRoute>
        <AdminLayout>
          <AdminViewPatient />
        </AdminLayout>
      </AdminProtectedRoute>
    ),
  },
  {
    path: "admin/patientEdit/",
    element: (
      <AdminProtectedRoute>
        <AdminLayout>
          <AdminEditPatient />
        </AdminLayout>
      </AdminProtectedRoute>
    ),
  },
  {
    path: "admin/slipView/",
    element: (
      <AdminProtectedRoute>
        <AdminLayout>
          <AdminViewSlips />
        </AdminLayout>
      </AdminProtectedRoute>
    ),
  },
  {
    path: "admin/slipEdit/",
    element: (
      <AdminProtectedRoute>
        <AdminLayout>
          <AdminEditSlips />
        </AdminLayout>
      </AdminProtectedRoute>
    ),
  },
  {
    path: "admin/cashView/",
    element: (
      <AdminProtectedRoute>
        <AdminLayout>
          <AdminViewCashTallies />
        </AdminLayout>
      </AdminProtectedRoute>
    ),
  },
  {
    path: "admin/serviceAdd/",
    element: (
      <AdminProtectedRoute>
        <AdminLayout>
          <AdminAddService />
        </AdminLayout>
      </AdminProtectedRoute>
    ),
  },
  {
    path: "admin/serviceView/",
    element: (
      <AdminProtectedRoute>
        <AdminLayout>
          <AdminViewService />
        </AdminLayout>
      </AdminProtectedRoute>
    ),
  },
  {
    path: "admin/serviceEdit/",
    element: (
      <AdminProtectedRoute>
        <AdminLayout>
          <AdminEditService />
        </AdminLayout>
      </AdminProtectedRoute>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
