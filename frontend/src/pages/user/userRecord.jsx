import React, { useEffect, useState } from "react";
import api from "../../api";
import Loader from "../../components/loader";

const UserRecord = () => {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");
  const [isloading, setIsLoading] = useState(false);
  // const LoadPatients = async () => {
  //   try {
  //     const response = await api.get("api/patients/");
  //     // Set the data in state
  //     setPatients(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  const handleSeacrh = async () => {
    setIsLoading(true);
    const res = await api.get(`api/u/patients/${search}/`);

    if (res.status === 200) {
      setPatients(res.data);
      setIsLoading(false);
    } else {
      console.log(res.data);
    }
  };

  // useEffect(() => {
  //   LoadPatients();
  // }, []);

  return (
    <div className="h-full w-full flex flex-col items-center">
      <h1 className="text-lushText text-2xl font-bold mt-12"> UserRecord</h1>
      <div className="flex flex-row items-center w-full mt-10 justify-center">
        <p className="text-lushText mr-10">Searh Patient</p>
        <input
          className="custom-serach-textField pl-6 focus:outline-none focus:ring-2 focus:ring-lushPrimary"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search id"
        />
        <button
          className="custom-search-btn flex flex-row justify-center items-center bg-lushPrimary ml-20"
          onClick={handleSeacrh}
        >
          <p className="text-lushText">Search</p>
          <img src="/src/assets/Search.png" className="w-6 h-6 ml-4" alt="" />
        </button>
      </div>
      {isloading && <Loader />}
      <div className="h-96 w-[700px] mt-20 overflow-y-auto">
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

export default UserRecord;
