import React, { useState } from "react";
import UserCreateNewPatient from "./userCreateNewPatient";

const UserPatientRegistration = () => {
  const [showOld, setShowOld] = useState(false);
  const [showInvalid, setShowInvalid] = useState(null);
  const [showNew, setShowNew] = useState(null);

  const handleOld = () => {};
  const handleSearch = () => {
    setShowInvalid(true);
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <h1 className="text-lushText text-2xl font-bold mt-12">
        Patient Registration
      </h1>
      <div className="new-old-btns ml-auto mt-10 mr-20">
        <button
          className="custom-btn bg-lushPrimary mr-4"
          onClick={() => setShowOld((prev) => !prev)}
        >
          Old
        </button>
        <button
          className="custom-btn bg-lushPrimary"
          onClick={() => setShowNew((prev) => !prev)}
        >
          New
        </button>
      </div>

      {showOld && (
        <div className="flex flex-col items-center">
          <h1 className="text-lushText mt-12">
            Selecting from old Patients Record
          </h1>
          <div className="flex flex-row items-center w-full mt-10">
            <p className="text-lushText mr-10">Searh Patient</p>
            <input
              className="custom-serach-textField pl-6 focus:outline-none focus:ring-2 focus:ring-lushPrimary"
              type="text"
              placeholder="Search id"
            />
            <button
              className="custom-search-btn flex flex-row justify-center items-center bg-lushPrimary ml-20"
              onClick={handleSearch}
            >
              <p className="text-lushText">Search</p>
              <img
                src="/src/assets/Search.png"
                className="w-6 h-6 ml-4"
                alt=""
              />
            </button>
          </div>
          {showInvalid && <p className="text-lushText mt-10">Not Found</p>}
        </div>
      )}

      {showNew && (
        <UserCreateNewPatient setShowOld={setShowOld} setShowNew={setShowNew} />
      )}
    </div>
  );
};

export default UserPatientRegistration;
