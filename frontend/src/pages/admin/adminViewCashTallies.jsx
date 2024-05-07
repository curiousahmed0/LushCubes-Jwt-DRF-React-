import React, { useEffect, useState } from "react";
import api from "../../api";

const AdminViewCashTallies = () => {
  const [cash, setCash] = useState([]);
  const [totalSale, setTotalSale] = useState("");

  const fetchTotalSale = () => {
    api
      .get("api/lushCubesStats/")
      .then((res) => {
        setTotalSale(res.data[0].total_sale);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchCash = () => {
    api
      .get("api/cashTally/")
      .then((res) => {
        console.log(res.data);
        setCash(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCash();
    fetchTotalSale();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-lushText text-2xl font-bold mt-10">
        View Cash Tallies
      </h1>
      <h1 className="text-lushText text-xl mt-10"> Total Sale : {totalSale}</h1>
      <div className="h-[500px] w-[700px] mt-10 overflow-y-auto">
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
                  Slip Id
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
              {cash.map((value) => (
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
                  <td className="px-6 py-4">{value.slip_id}</td>
                  <td className="px-6 py-4">{value.service_name}</td>
                  <td className="px-6 py-4">{value.service_price}</td>
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

export default AdminViewCashTallies;
