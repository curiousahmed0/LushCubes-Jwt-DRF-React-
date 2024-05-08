import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminEditService = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const [serviceId, setServiceId] = useState(Number(data.id));
  const [serviceName, setServiceName] = useState(data.service_name);
  const [servicePrice, setServicePrice] = useState(Number(data.service_price));
  const [serviceAvail, setServiceAvail] = useState(String(data.service_avail));
  const [isLoading, setIsLoading] = useState(false);
  const [invalid, setInvalid] = useState(false);

  const handleDelete = () => {
    api
      .delete(`api/a/service/${serviceId}/`)
      .then((res) => {
        console.log(res.data);
        EditAdminStats();
      })
      .catch((err) => {
        console.log(err);
        setInvalid(true);
        errorNotification();
      });
  };

  const EditAdminStats = async () => {
    let temp = 0;
    const res22 = await api
      .get("api/lushCubesStats/")
      .then((res) => {
        console.log(res.data);
        temp = res.data[0].total_services;
        return res.status;
      })
      .catch((err) => {
        console.log(err);
      });

    if (res22 === 200) {
      temp -= 1;
      const datal = {
        id: 1,
        total_services: temp,
      };
      api
        .patch("api/lushCubesStats/", datal)
        .then((res) => {
          console.log(res.data);
          navigate("/admin/serviceView");
          savedNotification();
        })
        .catch((err) => console.log(err));
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setIsLoading(true);
    let temp = true;
    if (serviceAvail === "true") {
      temp = true;
    } else if (serviceAvail === "false") {
      temp = false;
    } else {
      temp = true;
    }

    const dataS = {
      id: serviceId,
      service_name: serviceName,
      service_price: servicePrice,
      service_avail: temp,
    };

    api
      .patch("api/services/", dataS)
      .then((res) => {
        console.log(res.data);
        setIsLoading(false);
        navigate("/admin/serviceView");
        savedNotification();
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setInvalid(true);
        errorNotification();
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
    toast.error("Something went wrong", {
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
      <h1 className="text-lushText text-2xl font-bold mt-10">Edit Service</h1>
      <div className="flex flex-col justify-center items-center mt-16">
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={handleUpdate}
        >
          <input
            placeholder="Service Name"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            required
            className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-2"
            type="text"
          />
          <input
            placeholder="Price"
            value={servicePrice}
            onChange={(e) => setServicePrice(e.target.value)}
            required
            className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-2"
            type="Number"
          />
          <input
            placeholder="Availability"
            value={serviceAvail}
            onChange={(e) => setServiceAvail(e.target.value)}
            required
            className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-2"
            type="text"
          />
          {invalid && (
            <h1 className="text-red-700 text-xl">Something went wrong</h1>
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
    </div>
  );
};

export default AdminEditService;
