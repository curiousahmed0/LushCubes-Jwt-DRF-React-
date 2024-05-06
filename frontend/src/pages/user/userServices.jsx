import React, { useEffect, useState } from "react";
import api from "../../api";

const UserServices = () => {
  const [services, setServices] = useState([]);
  const serviceData = async () => {
    const res = await api.get("api/services/");

    if (res.status === 200) {
      console.log(res.data);
      setServices(res.data);
    } else {
      console.log("unable to fetch services data");
    }
  };

  useEffect(() => {
    serviceData();
  }, []);

  return (
    <div className="h-full w-full flex flex-col items-center">
      <h1 className="text-lushText text-2xl font-bold mt-12"> Services</h1>
      <div className="h-96 w-1/2 mt-20 overflow-y-auto">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-lushText">
            <thead className="text-xs text-lushText uppercase bg-black">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Service Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Service Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Availability
                </th>
              </tr>
            </thead>
            <tbody>
              {services.map((value) => (
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
                  <td className="px-6 py-4">{value.service_name}</td>
                  <td className="px-6 py-4">{value.service_price}</td>
                  <td className="px-6 py-4">{String(value.service_avail)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserServices;
