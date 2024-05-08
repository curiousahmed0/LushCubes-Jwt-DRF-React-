import React, { useEffect, useState } from "react";
import api from "../../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserUserEdit = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [userId, setUserId] = useState("");
  const [userSalary, setUserSalry] = useState("");
  const [userdesignation, setUserdesignation] = useState("");
  const [isvalid, setIsvalid] = useState(false);
  const fetchUserData = async () => {
    const res22 = await api
      .get("api/u/getUser/")
      .then((res) => {
        setUserId(Number(res.data[0].id));
        setFirstName(res.data[0].first_name);
        setLastName(res.data[0].last_name);
        setAge(res.data[0].profile.age);
        setUserSalry(res.data[0].profile.salary);
        setUserdesignation(res.data[0].profile.designation);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const saveUserData = async (e) => {
    e.preventDefault();
    const data = {
      id: userId,
      first_name: firstName,
      last_name: lastName,
      profile: {
        age: age,
        salary: userSalary,
        designation: userdesignation,
      },
    };

    const res22 = await api
      .patch("api/user/", data)
      .then((res) => {
        console.log(res.data);
        setIsvalid(true);
        savedNotification();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const savedNotification = () => {
    toast("Data Updated", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-lushText text-2xl font-bold mt-20">User Edit</h1>
      {!isvalid && (
        <div className="flex flex-col items-center mt-10">
          <form
            onSubmit={saveUserData}
            className="flex flex-col justify-center items-center"
          >
            <div className="flex flex-row justify-center items-center">
              <h1 className="text-lushText text-xl ">First Name :</h1>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="ml-10 custom-textField"
                type="text"
              />
            </div>
            <div className="flex flex-row justify-center items-center mt-4">
              <h1 className="text-lushText text-xl ">Last Name :</h1>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="ml-10 custom-textField"
                type="text"
              />
            </div>
            <div className="flex flex-row justify-center items-center mt-4">
              <h1 className="text-lushText text-xl ">Age :</h1>
              <input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="ml-10 custom-textField"
                type="number"
              />
            </div>

            <button
              className="custom-btn bg-lushPrimary mt-12 flex flex-row justify-center items-center"
              type="submit"
            >
              <p className="text-lushText">Save</p>
              <img src="/src/assets/save.png" className="w-6 h-6 ml-6" alt="" />
            </button>
          </form>
        </div>
      )}

      {isvalid && (
        <h1 className="text-lushText text-2xl font-bold mt-20">Data Updated</h1>
      )}
    </div>
  );
};

export default UserUserEdit;
