import React, { useEffect, useState } from "react";
import api from "../../api";

const AdminViewPatient = () => {
  const [patients, setPatients] = useState([]);

  const handleSeacrh = async () => {
    const res = await api.get("api/patients/");

    if (res.status === 200) {
      setPatients(res.data);
      setIsLoading(false);
    } else {
      console.log(res.data);
    }
  };

  useEffect(() => {
    handleSeacrh();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-lushText text-2xl font-bold">Patients View</h1>
      <div className="h-[550px] w-[700px] mt-20 overflow-y-auto">
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
