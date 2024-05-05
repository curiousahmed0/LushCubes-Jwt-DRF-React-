import React, { useEffect, useState } from "react";
import api from "../../api";

const UserHome = () => {
  const [totalPatientsDealt, setTotalPatientsDealt] = useState("");
  const [totalSale, setTotalSale] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [designation, setDesignation] = useState("");

  const userStats = async () => {
    const res = await api.get("api/u/userStats/");

    if (res.status === 200) {
      setTotalPatientsDealt(res.data[0].totalPatientsDealt);
      setTotalSale(res.data[0].totalSale);
      setUsername(res.data[0].user.username);
      setFirstName(res.data[0].user.first_name);
      setLastName(res.data[0].user.last_name);
      setAge(res.data[0].user.profile.age);
      setSalary(res.data[0].user.profile.salary);
      setDesignation(res.data[0].user.profile.designation);
    } else {
      console.log("unable to fetch userStats");
    }
  };

  useEffect(() => {
    userStats();
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <h1 className="text-lushText text-2xl font-bold mt-12">Home</h1>
      <h1 className="text-lushText text-2xl font-bold mt-8">
        Hello {username} ....!
      </h1>
      <div className="mt-16 h-full w-1/2">
        <div className="w-full h-12 flex flex-row items-center justify-between">
          <p className="text-lushText">Total patients Dealt :</p>
          <p className="text-lushText">{totalPatientsDealt}</p>
        </div>
        <div className="w-full h-12 flex flex-row items-center justify-between">
          <p className="text-lushText">Total Sale :</p>
          <p className="text-lushText">{totalSale}</p>
        </div>
        <div className="w-full h-12 flex flex-row items-center justify-between">
          <p className="text-lushText">First Name :</p>
          <p className="text-lushText">{firstName}</p>
        </div>
        <div className="w-full h-12 flex flex-row items-center justify-between">
          <p className="text-lushText">Last Name :</p>
          <p className="text-lushText">{lastName}</p>
        </div>
        <div className="w-full h-12 flex flex-row items-center justify-between">
          <p className="text-lushText">Age :</p>
          <p className="text-lushText">{age}</p>
        </div>
        <div className="w-full h-12 flex flex-row items-center justify-between">
          <p className="text-lushText">Salary :</p>
          <p className="text-lushText">{salary}</p>
        </div>
        <div className="w-full h-12 flex flex-row items-center justify-between">
          <p className="text-lushText">Designation :</p>
          <p className="text-lushText">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
