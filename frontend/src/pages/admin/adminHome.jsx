import React, { useEffect, useState } from "react";
import api from "../../api";

const AdminHome = () => {
  const [userName, setUsername] = useState("");
  const [totalPatients, setTotalPatients] = useState("");
  const [totalServices, setTotalServices] = useState("");
  const [totalUsers, setTotalUsers] = useState("");
  const [totalSale, setTotalSale] = useState("");

  const fetchLushCubesStats = async () => {
    const res22 = await api
      .get("api/lushCubesStats/")
      .then((res) => {
        console.log(res.data);
        setTotalPatients(res.data[0].total_patients);
        setTotalUsers(res.data[0].total_users);
        setTotalServices(res.data[0].total_services);
        setTotalSale(res.data[0].total_sale);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchUserName = async () => {
    const res22 = await api
      .get("api/u/getUser/")
      .then((res) => {
        console.log(res.data);
        setUsername(res.data[0].username);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUserName();
    fetchLushCubesStats();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-lushText text-2xl font-bold mt-20">Home</h1>
      <h1 className="text-lushText text-xl mt-10">Hello {userName}....!</h1>
      <div className="flex flex-col justify-center items-center w-96 mt-20">
        <div className="flex flex-row justify-between items-center w-full">
          <p className="text-lushText text-xl font-bold">Total Patients : </p>
          <p className="text-lushText text-xl font-bold">{totalPatients}</p>
        </div>
        <div className="flex flex-row justify-between items-center w-full mt-10">
          <p className="text-lushText text-xl font-bold">Total Services : </p>
          <p className="text-lushText text-xl font-bold">{totalServices}</p>
        </div>
        <div className="flex flex-row justify-between items-center w-full mt-10">
          <p className="text-lushText text-xl font-bold">Total Users : </p>
          <p className="text-lushText text-xl font-bold">{totalUsers}</p>
        </div>
        <div className="flex flex-row justify-between items-center w-full mt-10">
          <p className="text-lushText text-xl font-bold">Total Sale : </p>
          <p className="text-lushText text-xl font-bold">{totalSale}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
