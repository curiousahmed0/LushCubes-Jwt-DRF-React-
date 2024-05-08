import React, { useState } from "react";
import Loader from "../../components/loader";
import api from "../../api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminAddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);
  const [designation, setDesignation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [invalid, setInvalid] = useState(false);

  const handleUserSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    CreateUser();
  };

  const CreateUser = async () => {
    const data = {
      first_name: firstName,
      last_name: lastName,
      username: userName,
      password: pass,
      profile: {
        age: age,
        salary: salary,
        designation: designation,
      },
    };
    const res22 = await api
      .post("api/user/", data)
      .then((res) => {
        console.log(res.data);
        const userId = res.data.id;

        const data = {
          totalPatientsDealt: 0,
          totalSale: 0,
          user: userId,
        };

        api
          .post("api/userStats/", data)
          .then((res) => {
            console.log(res.data);
            EditLushCubesStats();
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
        setInvalid(true);
        errorNotification();
      });
  };

  const EditLushCubesStats = async () => {
    let temp = 0;
    const res2 = await api
      .get("api/lushCubesStats/")
      .then((res) => {
        console.log(res.data);
        temp = Number(res.data[0].total_users);
      })
      .catch((err) => {
        console.log(err);
      });

    temp += 1;
    const data = {
      id: 1,
      total_users: temp,
    };
    api
      .patch("api/lushCubesStats/", data)
      .then((res222) => {
        console.log(res222.data);
        setIsLoading(false);
        setInvalid(false);
        savedNotification();
      })
      .catch((err2) => {
        console.log(err2);
      });
  };

  const savedNotification = () => {
    toast.success("User Created Successfully", {
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

  const errorNotification = () => {
    toast.error("Something went Wrong", {
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
      <h1 className="text-lushText text-2xl font-bold mt-10">Add User</h1>
      <div className="flex flex-col justify-center items-center mt-10">
        <form
          className="flex flex-col items-center"
          onSubmit={handleUserSubmit}
        >
          <input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-2"
            type="text"
          />
          <input
            placeholder="Last Name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-2"
            type="text"
          />
          <input
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-2"
            type="text"
          />
          <input
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
            className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-2"
            type="text"
          />
          <input
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-2"
            type="number"
          />
          <input
            placeholder="Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
            className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-2"
            type="number"
          />
          <input
            placeholder="Designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            required
            className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-2"
            type="text"
          />
          {isLoading && <Loader />}
          {invalid && (
            <h1 className="text-red-700 text-xl">
              Username already taken or something went wrong
            </h1>
          )}
          <button
            className="custom-btn bg-lushPrimary mt-6 flex flex-row justify-center items-center"
            type="submit"
          >
            <p className="text-lushText">Submit</p>
            <img src="/src/assets/save.png" className="w-6 h-6 ml-6" alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminAddUser;
