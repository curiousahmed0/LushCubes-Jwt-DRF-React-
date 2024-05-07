import React, { useEffect, useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";

const AdminViewService = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();
  const fetchSrvices = () => {
    api
      .get("api/services/")
      .then((res) => {
        console.log(res.data);
        setServices(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleView = (value) => {
    navigate("/admin/serviceEdit/", {
      state: value,
    });
  };

  useEffect(() => {
    fetchSrvices();
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
                  <td>
                    <button
                      className="px-6 py-4 text-lushPrimary text-xl hover:underline"
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

export default AdminViewService;
