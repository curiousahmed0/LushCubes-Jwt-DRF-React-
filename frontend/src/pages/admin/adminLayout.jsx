import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  const [isUser, setIsUser] = useState(false);
  const [isPatients, setIsPatients] = useState(false);
  const [isSlips, setIsSlips] = useState(false);
  const [isCash, setIsCash] = useState(false);
  const [isServices, setIsServices] = useState(false);

  const handleUserBtn = () => {
    setIsCash(false);
    setIsPatients(false);
    setIsServices(false);
    setIsSlips(false);
    setIsUser((prev) => !prev);
  };

  const handlePatientsBtn = () => {
    setIsCash(false);
    setIsUser(false);
    setIsServices(false);
    setIsSlips(false);
    setIsPatients((prev) => !prev);
  };

  const handleSlipsBtn = () => {
    setIsCash(false);
    setIsUser(false);
    setIsServices(false);
    setIsPatients(false);
    setIsSlips((prev) => !prev);
  };

  const handleCashBtn = () => {
    setIsPatients(false);
    setIsUser(false);
    setIsServices(false);
    setIsSlips(false);
    setIsCash((prev) => !prev);
  };

  const handleServicesBtn = () => {
    setIsCash(false);
    setIsUser(false);
    setIsPatients(false);
    setIsSlips(false);
    setIsServices((prev) => !prev);
  };

  const handleLogout = () => {
    // localStorage.removeItem(ACCESS_TOKEN);
    // localStorage.removeItem(REFRESH_TOKEN);
    navigate("/admin");
  };

  return (
    <div className="h-screen w-screen flex flex-row">
      <div className="w-1/5 bg-lushSecondary flex flex-col items-center">
        <h1
          className="text-lushText text-3xl font-bold mt-12 cursor-pointer"
          onClick={() => navigate("/admin/home")}
        >
          LushCubes
        </h1>
        <button
          className="w-full h-14 bg-lushPrimary flex flex-row items-center justify-center mt-20"
          onClick={handleUserBtn}
        >
          <h1 className="text-lushText font-bold text-lg   hover:text-xl">
            Users
          </h1>
          <img
            src="/src/assets/user-edit.png"
            className="w-6 h-6 ml-4"
            alt=""
          />
        </button>
        {/* ################################################################################################### */}

        {isUser && (
          <div className="flex flex-col">
            <button
              className="w-full h-10 bg-lushSecondary flex flex-row items-center justify-center"
              onClick={() => navigate("/admin/userAdd")}
            >
              <h1 className="text-lushText font-bold text-sm   hover:text-lg ml-32">
                Add Users
              </h1>
              <img
                src="/src/assets/user-edit.png"
                className="w-6 h-6 ml-4"
                alt=""
              />
            </button>
            <button
              className="w-full h-10 bg-lushSecondary flex flex-row items-center justify-center"
              onClick={() => navigate("/admin/userView")}
            >
              <h1 className="text-lushText font-bold text-sm   hover:text-lg ml-32">
                View All Users
              </h1>
              <img
                src="/src/assets/user-edit.png"
                className="w-6 h-6 ml-4"
                alt=""
              />
            </button>
            <button
              className="w-full h-10 bg-lushSecondary flex flex-row items-center justify-center"
              onClick={() => navigate("/admin/userEdit")}
            >
              <h1 className="text-lushText font-bold text-sm   hover:text-lg ml-32">
                Delete or Edit
              </h1>
              <img
                src="/src/assets/user-edit.png"
                className="w-6 h-6 ml-4"
                alt=""
              />
            </button>
          </div>
        )}

        {/* 
########################################################################################## */}

        <button
          className="w-full h-14 bg-lushPrimary flex flex-row items-center justify-center"
          onClick={handlePatientsBtn}
        >
          <h1 className="text-lushText font-bold text-lg hover:text-xl">
            Patients
          </h1>
          <img src="/src/assets/medical.png" className="w-6 h-6 ml-4" alt="" />
        </button>

        {/* ################################################################################################### */}

        {isPatients && (
          <div className="flex flex-col">
            <button
              className="w-full h-10 bg-lushSecondary flex flex-row items-center justify-center"
              onClick={() => navigate("/admin/patientAdd")}
            >
              <h1 className="text-lushText font-bold text-sm   hover:text-lg ml-32">
                Add Patients
              </h1>
              <img
                src="/src/assets/user-edit.png"
                className="w-6 h-6 ml-4"
                alt=""
              />
            </button>
            <button
              className="w-full h-10 bg-lushSecondary flex flex-row items-center justify-center"
              onClick={() => navigate("/admin/patientView")}
            >
              <h1 className="text-lushText font-bold text-sm   hover:text-lg hover:ml-20  ml-32">
                View All Patients
              </h1>
              <img
                src="/src/assets/user-edit.png"
                className="w-6 h-6 ml-4"
                alt=""
              />
            </button>
            <button
              className="w-full h-10 bg-lushSecondary flex flex-row items-center justify-center"
              onClick={() => navigate("/admin/patientEdit")}
            >
              <h1 className="text-lushText font-bold text-sm   hover:text-lg ml-32">
                Delete or Edit
              </h1>
              <img
                src="/src/assets/user-edit.png"
                className="w-6 h-6 ml-4"
                alt=""
              />
            </button>
          </div>
        )}

        {/* 
########################################################################################## */}

        <button
          className="w-full h-14 bg-lushPrimary flex flex-row items-center justify-center"
          onClick={handleSlipsBtn}
        >
          <h1 className="text-lushText font-bold text-lg hover:text-xl">
            Slips
          </h1>
          <img src="/src/assets/Slips.png" className="w-6 h-6 ml-4" alt="" />
        </button>

        {/* ################################################################################################### */}

        {isSlips && (
          <div className="flex flex-col">
            <button
              className="w-full h-10 bg-lushSecondary flex flex-row items-center justify-center"
              onClick={() => navigate("/admin/slipView")}
            >
              <h1 className="text-lushText font-bold text-sm   hover:text-lg ml-32">
                View All Slips
              </h1>
              <img
                src="/src/assets/user-edit.png"
                className="w-6 h-6 ml-4"
                alt=""
              />
            </button>
            <button
              className="w-full h-10 bg-lushSecondary flex flex-row items-center justify-center"
              onClick={() => navigate("/admin/slipEdit")}
            >
              <h1 className="text-lushText font-bold text-sm   hover:text-lg ml-32">
                Delete or Edit
              </h1>
              <img
                src="/src/assets/user-edit.png"
                className="w-6 h-6 ml-4"
                alt=""
              />
            </button>
          </div>
        )}

        {/* 
########################################################################################## */}

        <button
          className="w-full h-14 bg-lushPrimary flex flex-row items-center justify-center"
          onClick={handleCashBtn}
        >
          <h1 className="text-lushText font-bold text-lg hover:text-xl">
            Cash
          </h1>
          <img src="/src/assets/cash.png" className="w-6 h-6 ml-4" alt="" />
        </button>

        {/* ################################################################################################### */}

        {isCash && (
          <div className="flex flex-col">
            <button
              className="w-full h-10 bg-lushSecondary flex flex-row items-center justify-center"
              onClick={() => navigate("/admin/cashView")}
            >
              <h1 className="text-lushText font-bold text-sm   hover:text-lg ml-32 hover:ml-20">
                View CashTallies
              </h1>
              <img
                src="/src/assets/user-edit.png"
                className="w-6 h-6 ml-4"
                alt=""
              />
            </button>
          </div>
        )}

        {/* 
########################################################################################## */}

        <button
          className="w-full h-14 bg-lushPrimary flex flex-row items-center justify-center"
          onClick={handleServicesBtn}
        >
          <h1 className="text-lushText font-bold text-lg hover:text-xl">
            Services
          </h1>
          <img src="/src/assets/services.png" className="w-6 h-6 ml-4" alt="" />
        </button>

        {/* ################################################################################################### */}

        {isServices && (
          <div className="flex flex-col">
            <button
              className="w-full h-10 bg-lushSecondary flex flex-row items-center justify-center"
              onClick={() => navigate("/admin/serviceAdd")}
            >
              <h1 className="text-lushText font-bold text-sm   hover:text-lg ml-32">
                Add Services
              </h1>
              <img
                src="/src/assets/user-edit.png"
                className="w-6 h-6 ml-4"
                alt=""
              />
            </button>
            <button
              className="w-full h-10 bg-lushSecondary flex flex-row items-center justify-center"
              onClick={() => navigate("/admin/serviceView")}
            >
              <h1 className="text-lushText font-bold text-sm   hover:text-lg ml-32 hover:ml-20">
                View All Services
              </h1>
              <img
                src="/src/assets/user-edit.png"
                className="w-6 h-6 ml-4"
                alt=""
              />
            </button>
            <button
              className="w-full h-10 bg-lushSecondary flex flex-row items-center justify-center"
              onClick={() => navigate("/admin/serviceEdit")}
            >
              <h1 className="text-lushText font-bold text-sm   hover:text-lg ml-32">
                Delete or Edit
              </h1>
              <img
                src="/src/assets/user-edit.png"
                className="w-6 h-6 ml-4"
                alt=""
              />
            </button>
          </div>
        )}

        {/* 
########################################################################################## */}

        <button
          className="w-full h-14 bg-lushPrimary flex flex-row items-center justify-center mt-auto"
          onClick={handleLogout}
        >
          <h1 className="text-lushText font-bold text-lg hover:text-xl">
            Logout
          </h1>
          <img src="/src/assets/logout.png" className="w-6 h-6 ml-4" alt="" />
        </button>
      </div>

      <div className="w-4/5 bg-black">{children}</div>
    </div>
  );
};

export default AdminLayout;
