import React from "react";
import { useNavigate } from "react-router-dom";

const UserLoginScreen = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("user/home");
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center custom-login-bg">
      <form
        className="w-2/6 h-[440px] custom-glass flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold text-lushText mt-10">
          LushCubes User Login
        </h1>
        <input
          placeholder="Username"
          className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-8"
          type="text"
        />
        <input
          placeholder="Password"
          className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-8"
          type="text"
        />
        <button className="custom-btn bg-lushPrimary mt-8" type="submit">
          Login
        </button>
        <p className="text-xl text-lushText mt-6">
          Login as{" "}
          <span
            className="text-lushPrimary custom-adminbtn-effect"
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
