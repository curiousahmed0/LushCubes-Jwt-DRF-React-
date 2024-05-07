import React, { useEffect, useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";

const AdminViewPatient = () => {
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  const handleSeacrh = async () => {
    const res = await api.get("api/patients/");

    if (res.status === 200) {
      setPatients(res.data);
    } else {
      console.log(res.data);
    }
  };

  useEffect(() => {
    handleSeacrh();
  }, []);

  const handleView = (value) => {
    navigate("/admin/patientEdit", { state: value });
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-lushText text-2xl font-bold">Patients View</h1>
      <div className="h-[550px] w-[900px] mt-20 overflow-y-auto">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-lushText">
            <thead className="text-xs text-lushText uppercase bg-black">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Patient Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Patient Age
                </th>
                <th scope="col" className="px-6 py-3">
                  Gender
                </th>
                <th scope="col" className="px-6 py-3">
                  Mobile Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Cnic
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {patients.map((value) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={value.id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {value.id}
                  </th>
                  <td className="px-6 py-4">{value.patient_name}</td>
                  <td className="px-6 py-4">{value.patient_age}</td>
                  <td className="px-6 py-4">{String(value.patient_gender)}</td>
                  <td className="px-6 py-4">{value.patient_mbn}</td>
                  <td className="px-6 py-4">{value.patient_cnic}</td>
                  <td>
                    <button
                      className="px-6 py-4 text-lushPrimary hover:underline text-xl"
                      onClick={() => handleView(value)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminViewPatient;
