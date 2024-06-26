import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { ACCESS_TOKEN, ISADMIN, REFRESH_TOKEN } from "../../constants";
import Loader from "../../components/loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AdminLoginScreen = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (username !== "lush" || password !== "6969") {
      errorNotification();
      setIsLoading(false);
      return;
    }

    const data = {
      username: username,
      password: password,
    };

    api
      .post("api/login/", data)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        localStorage.setItem(ISADMIN, "true");
        navigate("/admin/home");
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setInvalid(true);
        setIsLoading(false);
      });
  };

  const savedNotification = () => {
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

  const errorNotification = () => {
    toast.error("Wrong UserName or Password", {
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
    <div className="h-screen w-screen flex justify-center items-center custom-admin-bg">
      <form
        onSubmit={handleLogin}
        className="w-2/6 h-[440px] custom-glass flex flex-col items-center"
      >
        <h1 className="text-3xl font-bold text-lushText mt-10">
          <span className="text-lushPrimary">PureMed</span> Admin Login
        </h1>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-8"
          type="text"
        />
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-8"
          type="text"
        />
        <button type="submit" className="custom-btn bg-lushPrimary mt-8">
          Login
        </button>
        {isloading && <Loader />}
        {invalid && (
          <h1 className="text-xl text-red-600 mt-6">
            Wrong username or passowrd
          </h1>
        )}
        <p className="text-xl text-lushText mt-6">
          Login as{" "}
          <span
            className="text-lushPrimary custom-adminbtn-effect cursor-pointer"
            onClick={() => navigate("/")}
          >
            User
          </span>
        </p>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default AdminLoginScreen;
