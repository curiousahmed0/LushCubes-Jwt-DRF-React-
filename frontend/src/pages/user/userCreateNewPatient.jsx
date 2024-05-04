import React, { useState } from "react";

const UserCreateNewPatient = ({ setShowOld, setShowNew }) => {
  setShowOld(false);
  setShowNew(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(gender);
    setShowNew(false);
    setShowOld(true);
  };
  const [gender, setGender] = useState("");

  return (
    <div className="h-full w-full flex flex-col items-center">
      <h1 className="text-lushText mt-10"> Create New Patient</h1>

      <form
        className="w-2/6 h-[440px] custom-glass flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <input
          placeholder="Name"
          className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-8"
          type="text"
        />
        <input
          placeholder="Age"
          className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-4"
          type="number"
        />
        <input
          placeholder="Mobile Number"
          className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-4"
          type="text"
        />
        <input
          placeholder="Cnic"
          className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-4"
          type="text"
        />
        <div className="custom-select mt-4 mb-4">
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="h-6 w-32"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button
          className="custom-btn bg-lushPrimary mt-12 flex flex-row justify-center items-center"
          type="submit"
        >
          <p className="text-lushText">Submit</p>
          <img src="/src/assets/save.png" className="w-6 h-6 ml-6" alt="" />
        </button>
      </form>
    </div>
  );
};

export default UserCreateNewPatient;
