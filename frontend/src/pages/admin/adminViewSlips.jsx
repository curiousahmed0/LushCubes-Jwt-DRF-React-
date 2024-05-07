import React, { useEffect, useState } from "react";
import api from "../../api";

const AdminViewSlips = () => {
  const [slips, setSlips] = useState([]);

  const fetchSlips = () => {
    api
      .get("api/slips/")
      .then((res) => {
        console.log(res.data);
        setSlips(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchSlips();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-lushText text-2xl font-bold mt-10">View Slips</h1>
      <div className="h-[550px] w-[700px] mt-10 overflow-y-auto">
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
                  Service Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Service Price
                </th>
                <th scope="col" className="px-6 py-3">
                  User
                </th>
              </tr>
            </thead>
            <tbody>
              {slips.map((value) => (
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
                  <td className="px-6 py-4">
                    {value.patient_detail.patient_name}
                  </td>
                  <td className="px-6 py-4">
                    {value.patient_detail.patient_age}
                  </td>
                  <td className="px-6 py-4">
                    {value.service_detail.service_name}
                  </td>
                  <td className="px-6 py-4">
                    {value.service_detail.service_price}
                  </td>
                  <td className="px-6 py-4">{value.user.username}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminViewSlips;
