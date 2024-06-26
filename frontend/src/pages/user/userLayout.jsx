import React from "react";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UserLayout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    navigate("/");
  };

  return (
    <div className="h-screen w-screen flex flex-row">
      <div className="w-1/5 bg-lushPrimary flex flex-col items-center">
        <h1
          className="text-lushText text-3xl font-bold mt-12 cursor-pointer"
          onClick={() => navigate("/user/home")}
        >
          PureMed
        </h1>
        <button
          className="w-full h-14 bg-lushSecondary flex flex-row items-center justify-center mt-20"
          onClick={() => navigate("/user/registration")}
        >
          <h1 className="text-lushText font-bold text-lg   hover:text-xl">
            Registration
          </h1>
          <img
            src="/src/assets/registration.png"
            className="w-6 h-6 ml-4"
            alt=""
          />
        </button>

        <button
          className="w-full h-14 bg-lushSecondary flex flex-row items-center justify-center"
          onClick={() => navigate("/user/services")}
        >
          <h1 className="text-lushText font-bold text-lg hover:text-xl">
            Services
          </h1>
          <img src="/src/assets/services.png" className="w-6 h-6 ml-4" alt="" />
        </button>

        <button
          className="w-full h-14 bg-lushSecondary flex flex-row items-center justify-center"
          onClick={() => navigate("/user/record")}
        >
          <h1 className="text-lushText font-bold text-lg hover:text-xl">
            Record
          </h1>
          <img src="/src/assets/record.png" className="w-6 h-6 ml-4" alt="" />
        </button>

        <button
          className="w-full h-14 bg-lushSecondary flex flex-row items-center justify-center"
          onClick={() => navigate("/user/cashTally")}
        >
          <h1 className="text-lushText font-bold text-lg hover:text-xl">
            Cash Tally
          </h1>
          <img src="/src/assets/cash.png" className="w-6 h-6 ml-4" alt="" />
        </button>

        <button
          className="w-full h-14 bg-lushSecondary flex flex-row items-center justify-center"
          onClick={() => navigate("/user/editUser")}
        >
          <h1 className="text-lushText font-bold text-lg hover:text-xl">
            User Edit
          </h1>
          <img
            src="/src/assets/user-edit.png"
            className="w-6 h-6 ml-4"
            alt=""
          />
        </button>
        <button
          className="w-full h-14 bg-lushSecondary flex flex-row items-center justify-center mt-auto"
          onClick={handleLogout}
        >
          <h1 className="text-lushText font-bold text-lg hover:text-xl">
            Logout
          </h1>
          <img src="/src/assets/logout.png" className="w-6 h-6 ml-4" alt="" />
        </button>
      </div>

      <div className="w-4/5 bg-black">{children}</div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default UserLayout;
