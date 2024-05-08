import React, { useState } from "react";
import Loader from "../../components/loader";
import api from "../../api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminAddService = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [avail, setAvail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [invalid, setInavlid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let temp = true;
    if (avail === "1") {
      temp = true;
    } else if (avail === "0") {
      temp = false;
    } else {
      temp = true;
    }

    const data = {
      service_name: name,
      service_price: price,
      service_avail: temp,
    };

    const res22 = await api
      .post("api/services/", data)
      .then((res) => {
        console.log(res.data);
        return res.status;
      })
      .catch((err) => {
        console.log(err);
        setInavlid(true);
        errorNotification();
      });

    if (res22 === 201) {
      EditLushCubesStats();
      savedNotification();
    }

    setIsLoading(false);
  };

  const EditLushCubesStats = async () => {
    let temp = 0;
    const res22 = await api
      .get("api/lushCubesStats/")
      .then((res) => {
        console.log(res.data);
        temp = Number(res.data[0].total_services);
        return res.status;
      })
      .catch((err) => {
        console.log(err);
      });

    if (res22 === 200) {
      temp += 1;
      const data = {
        id: 1,
        total_services: temp,
      };

      api
        .patch("api/lushCubesStats/", data)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
      <h1 className="text-lushText text-2xl font-bold mt-10">Add Service</h1>
      <div className="flex flex-col justify-center items-center mt-10">
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <input
            placeholder="Service Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-2"
            type="text"
          />
          <input
            placeholder="Service Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-2"
            type="number"
          />
          <input
            placeholder="Availability"
            value={avail}
            onChange={(e) => setAvail(e.target.value)}
            required
            className="custom-textField focus:outline-none focus:ring-2 focus:ring-lushPrimary mt-2"
            type="text"
          />

          {isLoading && <Loader />}
          {invalid && (
            <h1 className="text-red-700 text-xl">something went wrong</h1>
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

export default AdminAddService;
