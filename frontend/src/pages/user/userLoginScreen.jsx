import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";
import Loader from "../../components/loader";

const UserLoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

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
        navigate("/user/home");
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setInvalid(true);
        setIsLoading(false);
      });
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center custom-login-bg">
      <form
        className="w-2/6 h-[480px] custom-glass flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold text-lushText mt-10">
          <span className="text-lushPrimary">PureMed</span> User Login
        </h1>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
          className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-8"
          type="text"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-8"
          type="text"
        />
        <button className="custom-btn bg-lushPrimary mt-8" type="submit">
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
            onClick={() => navigate("admin")}
          >
            admin
          </span>
        </p>
      </form>
    </div>
  );
};

export default UserLoginScreen;
