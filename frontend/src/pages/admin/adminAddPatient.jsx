import React, { useState } from "react";
import api from "../../api";
import Loader from "../../components/loader";

const AdminAddPatient = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [mbn, setMbn] = useState("");
  const [cnic, setCnic] = useState("");
  const [gender, setGender] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [invalid, setInvalid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);
    let temp = true;
    if (gender === "male") {
      temp = true;
    } else {
      temp = false;
    }

    const data = {
      patient_name: name,
      patient_age: age,
      patient_gender: temp,
      patient_mbn: mbn,
      patient_cnic: cnic,
    };

    const res22 = await api
      .post("api/patients/", data)
      .then((res) => {
        console.log(res.data);
        return res.status;
      })
      .catch((err) => {
        console.log(err);
        setInvalid(true);
      });

    console.log(res22);
    if (res22 === 201) {
      EditLushCubesStats();
    }
  };

  const EditLushCubesStats = async () => {
    let temp = 0;
    const res22 = await api
      .get("api/lushCubesStats/")
      .then((res) => {
        console.log(res.data);
        temp = Number(res.data[0].total_patients);
        return res.status;
      })
      .catch((err) => {
        console.log(err);
      });

    if (res22 === 200) {
      temp += 1;
      const data = {
        id: 1,
        total_patients: temp,
      };

      api
        .patch("api/lushCubesStats/", data)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err2) => console.log(err2));
    }
    setIsloading(false);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-lushText text-2xl font-bold mt-12">Add Patient</h1>
      <div className="flex flex-col justify-center items-center mt-10">
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <input
            placeholder="Name"
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
            type="number"
          />
          <input
            placeholder="Cnic"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
            required
            className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-2"
            type="text"
          />
          <input
            placeholder="Mobile Number"
            value={mbn}
            onChange={(e) => setMbn(e.target.value)}
            required
            className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-2"
            type="number"
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

          {isLoading && <Loader />}
          {invalid && (
            <h1 className="text-red-700 text-xl">
              Username already taken or something went wrong
            </h1>
          )}
          <button
            className="custom-btn bg-lushPrimary mt-6 flex flex-row justify-center items-center"
            type="submit"
          >
            <p className="text-lushText">Submit</p>
            <img src="/src/assets/save.png" className="w-6 h-6 ml-6" alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminAddPatient;
