import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../../components/loader";
import api from "../../api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminEditPatient = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const [name, setName] = useState(data.patient_name);
  const [age, setAge] = useState(Number(data.patient_age));
  const [gender, setGender] = useState(String(data.patient_gender));
  const [mbn, setMbn] = useState(data.patient_mbn);
  const [cnic, setCnic] = useState(data.patient_cnic);
  const [patientId, setPatientId] = useState(Number(data.id));
  const [isLoading, setIsloading] = useState(false);
  const [invalid, setinvalid] = useState(false);

  const handleDelete = () => {
    api
      .delete(`api/a/patient/${patientId}/`)
      .then((res) => {
        console.log(res.data);
        navigate("/admin/patientView");
        savedNotification();
      })
      .catch((err) => {
        console.log(err);
        setinvalid(true);
        errorNotification();
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setIsloading(true);
    let temp = true;
    if (gender === "true") {
      temp = true;
    } else if (gender === "false") {
      temp = false;
    } else {
      temp = true;
    }

    const dataP = {
      id: patientId,
      patient_name: name,
      patient_age: age,
      patient_cnic: cnic,
      patient_mbn: mbn,
      patient_gender: temp,
    };

    api
      .patch("api/patients/", dataP)
      .then((res) => {
        console.log(res.data);
        navigate("/admin/patientView");
        savedNotification();
      })
      .catch((err) => {
        console.log(err);
        errorNotification();
      });
  };

  const savedNotification = () => {
    toast.success("Success", {
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

  const errorNotification = () => {
    toast.error("Something went wrong", {
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
    <div className="flex flex-col items-center">
      <h1 className="text-lushText text-2xl font-bold mt-10">Edit Patient</h1>
      <div className="flex flex-col justify-center items-center mt-16">
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={handleUpdate}
        >
          <input
            placeholder="Patient Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-2"
            type="text"
          />
          <input
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-2"
            type="Number"
          />
          <input
            placeholder="Mobile Number"
            value={mbn}
            onChange={(e) => setMbn(e.target.value)}
            required
            className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-2"
            type="text"
          />
          <input
            placeholder="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-2"
            type="text"
          />
          <input
            placeholder="Cnic"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
            required
            className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-2"
            type="text"
          />
          {isLoading && <Loader />}
          {invalid && (
            <h1 className="text-red-700 text-xl">Something went wrong</h1>
          )}

          <button
            className="custom-btn bg-lushPrimary mt-6 flex flex-row justify-center items-center"
            type="submit"
          >
            <p className="text-lushText">Update</p>
            <img src="/src/assets/save.png" className="w-6 h-6 ml-6" alt="" />
          </button>
        </form>
        <button
          className="custom-btn bg-lushPrimary mt-6 flex flex-row justify-center items-center"
          onClick={handleDelete}
        >
          <p className="text-lushText">Delete</p>
          <img src="/src/assets/delete.png" className="w-6 h-6 ml-6" alt="" />
        </button>
      </div>
    </div>
  );
};

export default AdminEditPatient;
