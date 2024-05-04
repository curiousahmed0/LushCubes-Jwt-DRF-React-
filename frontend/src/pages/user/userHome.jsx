import React from "react";

const UserHome = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <h1 className="text-lushText text-2xl font-bold mt-12">Home</h1>
      <h1 className="text-lushText text-2xl font-bold mt-8">
        Hello User ....!
      </h1>
      <div className="mt-16 h-full w-1/2">
        <div className="w-full h-12 flex flex-row items-center justify-between">
          <p className="text-lushText">Total patients Dealt :</p>
          <p className="text-lushText">5451</p>
        </div>
        <div className="w-full h-12 flex flex-row items-center justify-between">
          <p className="text-lushText">Total Sale :</p>
          <p className="text-lushText">5451</p>
        </div>
        <div className="w-full h-12 flex flex-row items-center justify-between">
          <p className="text-lushText">Username :</p>
          <p className="text-lushText">Xyz</p>
        </div>
        <div className="w-full h-12 flex flex-row items-center justify-between">
          <p className="text-lushText">First Name :</p>
          <p className="text-lushText">Xyz</p>
        </div>
        <div className="w-full h-12 flex flex-row items-center justify-between">
          <p className="text-lushText">Last Name :</p>
          <p className="text-lushText">Xyz</p>
        </div>
        <div className="w-full h-12 flex flex-row items-center justify-between">
          <p className="text-lushText">Age :</p>
          <p className="text-lushText">20</p>
        </div>
        <div className="w-full h-12 flex flex-row items-center justify-between">
          <p className="text-lushText">Salary :</p>
          <p className="text-lushText">20000</p>
        </div>
        <div className="w-full h-12 flex flex-row items-center justify-between">
          <p className="text-lushText">Designation :</p>
          <p className="text-lushText">xyz</p>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
