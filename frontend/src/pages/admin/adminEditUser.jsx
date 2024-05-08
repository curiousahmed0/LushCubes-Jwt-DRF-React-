import React, { useState } from "react";
import Loader from "../../components/loader";
import api from "../../api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminEditUser = () => {
  const [serachId, setsearchId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);
  const [designation, setDesignation] = useState("");
  const [userId, setUserId] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleSearch = async () => {
    const res22 = await api
      .get(`api/a/user/${serachId}/`)
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        setNotFound(true);
        setShowForm(false);
        notFoundNotification();
      });

    if (res22.length === 0) {
      setNotFound(true);
      setShowForm(false);
      notFoundNotification();
    } else {
      setUserId(res22[0].id);
      setFirstName(res22[0].first_name);
      setLastName(res22[0].last_name);
      setUserName(res22[0].username);
      setPassword(res22[0].password);
      setAge(Number(res22[0].profile.age));
      setSalary(Number(res22[0].profile.salary));
      setDesignation(res22[0].profile.designation);
      setShowForm(true);
      setNotFound(false);
    }
  };

  const handleDelete = () => {
    api
      .delete(`api/a/user/${userId}/`)
      .then((res) => {
        console.log(res.data);
        EditAdminStats();
        setsearchId("");
        setShowForm(false);
        SuccessNotification();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const EditAdminStats = async () => {
    let temp = 0;
    const res22 = await api
      .get("api/lushCubesStats/")
      .then((res) => {
        temp = res.data[0].total_users;
        return res.status;
      })
      .catch((err) => console.log(err));

    if (res22 === 200) {
      temp -= 1;
      const data = {
        id: 1,
        total_users: temp,
      };
      api
        .patch("api/lushCubesStats/", data)
        .then((res2) => console.log(res2.data))
        .catch((err2) => console.log(err2));
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsloading(true);
    const data = {
      id: userId,
      first_name: firstName,
      last_name: lastName,
      passowrd: password,
      profile: {
        age: age,
        salary: salary,
        designation: designation,
      },
    };

    const res22 = await api
      .patch("api/user/", data)
      .then((res) => {
        console.log(res.data);
        setShowForm(false);
        setIsloading(false);
        SuccessNotification();
      })
      .catch((err) => {
        console.log(err);
        setInvalid(true);
        setIsloading(false);
        errorNotification();
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

  const notFoundNotification = () => {
    toast.warn("Not Found", {
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

  const SuccessNotification = () => {
    toast.success("Success", {
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
      <h1 className="text-lushText mt-10 font-bold">Edit User</h1>
      <div className="flex flex-row items-center justify-center w-full mt-10">
        <p className="text-lushText mr-10">Searh User</p>
        <input
          className="custom-serach-textField pl-6 focus:outline-none focus:ring-2 focus:ring-lushPrimary"
          type="text"
          value={serachId}
          onChange={(e) => setsearchId(e.target.value)}
          placeholder="Search id"
        />
        <button
          onClick={handleSearch}
          className="custom-search-btn flex flex-row justify-center items-center bg-lushPrimary ml-20"
        >
          <p className="text-lushText">Search</p>
          <img src="/src/assets/Search.png" className="w-6 h-6 ml-4" alt="" />
        </button>
      </div>
      {notFound && <h1 className="text-red-700 text-xl mt-10">Not found</h1>}
      {showForm && (
        <div className="flex flex-col justify-center items-center mt-28">
          <form
            className="flex flex-col items-center justify-center"
            onSubmit={handleUpdate}
          >
            <div className="flex flex-row items-center justify-center">
              <div className="flex flex-col items-center justify-center mr-20">
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
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-2"
                  type="text"
                />
                <input
                  placeholder="UserName"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-2"
                  type="text"
                />
                <input
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-2"
                  type="text"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <input
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                  className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-2"
                  type="text"
                />
                <input
                  placeholder="Salary"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  required
                  className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-2"
                  type="text"
                />
                <input
                  placeholder="Designation"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  required
                  className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-2"
                  type="text"
                />
              </div>
            </div>
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
              <p className="text-lushText">Update</p>
              <img src="/src/assets/save.png" className="w-6 h-6 ml-6" alt="" />
            </button>
          </form>
          <button
            className="custom-btn bg-lushPrimary mt-6 flex flex-row justify-center items-center"
            onClick={handleDelete}
          >
            <p className="text-lushText">Delete</p>
            <img src="/src/assets/delete.png" className="w-6 h-6 ml-6" alt="" />
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminEditUser;
