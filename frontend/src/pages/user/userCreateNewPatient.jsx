import React, { useState } from "react";
import api from "../../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserCreateNewPatient = ({ setShowOld, setShowNew }) => {
  setShowOld(false);
  setShowNew(true);

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [mbn, setMbn] = useState("");
  const [cnic, setCnic] = useState("");
  const [agender, setAgender] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let temp = true;
    if (gender === "male") {
      setAgender(true);
    } else if (gender === "female") {
      setAgender(false);
    } else {
      temp = true;
    }

    const data = {
      patient_name: name,
      patient_age: age,
      patient_gender: temp,
      patient_mbn: mbn,
      patient_cnic: cnic,
    };

    const res = await api.post("api/patients/", data);

    if (res.status === 201) {
      console.log(res.data);
      console.log(res.data.id);
      setShowNew(false);
      setShowOld(true);
      savedNotification();
    } else {
      console.log("failed to post patient record");
    }
  };
  const [gender, setGender] = useState("");

  const savedNotification = () => {
    toast.success("Patient Created Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="h-full w-full flex flex-col items-center">
      <h1 className="text-lushText mt-10"> Create New Patient</h1>

      <form
        className="w-2/6 h-[440px] custom-glass flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-8"
          type="text"
        />
        <input
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-4"
          type="number"
        />
        <input
          placeholder="Mobile Number"
          value={mbn}
          onChange={(e) => setMbn(e.target.value)}
          className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-4"
          type="text"
        />
        <input
          placeholder="Cnic"
          value={cnic}
          onChange={(e) => setCnic(e.target.value)}
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
