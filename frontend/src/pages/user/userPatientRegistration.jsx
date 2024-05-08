import React, { useEffect, useState } from "react";
import UserCreateNewPatient from "./userCreateNewPatient";
import api from "../../api";
import Loader from "../../components/loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserPatientRegistration = () => {
  const [showOld, setShowOld] = useState(false);
  const [showInvalid, setShowInvalid] = useState(null);
  const [showInvalid2, setShowInvalid2] = useState(null);
  const [showNew, setShowNew] = useState(false);
  const [showServiceSearch, setShowServiceSearch] = useState(false);
  const [showServiceSearchBtn, setShowServiceSearchBtn] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [searchPatient, setSearchPatient] = useState("");
  const [searchService, setSearchService] = useState("");
  const [pname, setPname] = useState("");
  const [sname, setSname] = useState("");
  let patientData = [];
  let serviceData = [];
  const [patientId, setPatientId] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [userId, setUserId] = useState("");
  let slipId = "";
  const [ctSPrice, setctSPrice] = useState(0);
  let totalPatientsDealt = 0;
  let totalSale = 0;
  let userStatsId = "";
  let lcStatsId = "";
  let lctotalPatients = 0;
  let lctotalSale = 0;

  // function to fetch userId of current logged in user
  const fecthUserId = async () => {
    const res22 = await api
      .get("api/getUser/")
      .then((res) => {
        console.log(res.data);
        setUserId(res.data.userId);
        console.log(userId);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fecthUserId();
  }, []);

  const handleOld = () => {
    setShowNew(false);
    setShowOld((prev) => !prev);
  };

  // function to handle patient that is being searched
  const handleSearchPatient = async () => {
    const res = await api.get(`api/u/u/patients/${searchPatient}/`);
    if (res.status === 200) {
      patientData = res.data;
      if (patientData.length === 0) {
        console.log("nothing found");
        setShowInvalid(true);
        setShowServiceSearch(false);
        NotFoundNotification();
      } else {
        setPname(patientData[0].patient_name);
        console.log(pname);
        console.log(patientData[0].id);
        setPatientId(patientData[0].id);
        setShowInvalid(false);
        setShowServiceSearch(true);
      }
    } else {
      console.log(res.data);
    }
  };

  // function to handle service to be searched
  const handleServiceSearch = async () => {
    const res = await api.get(`api/u/u/services/${searchService}/`);
    if (res.status === 200) {
      serviceData = res.data;
      if (serviceData.length === 0) {
        console.log("nothing found");
        setShowInvalid2(true);
        setShowServiceSearchBtn(false);
        NotFoundNotification();
      } else {
        setSname(serviceData[0].service_name);
        setctSPrice(Number(serviceData[0].service_price));
        console.log(sname);
        console.log(serviceData[0].id);
        setServiceId(serviceData[0].id);
        setShowInvalid2(false);
        setShowServiceSearchBtn(true);
      }
    } else {
      console.log(res.data);
    }
  };

  // handle cashTally
  const handleCashTally = async () => {
    const cashTallyData = {
      patient_name: pname,
      service_name: sname,
      service_price: ctSPrice,
      slip_id: slipId,
      user: userId,
    };

    const res22 = await api
      .post("api/cashTally/", cashTallyData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // function to handle userStats
  const handleUserStats = async () => {
    const res22 = await api
      .get("api/u/userStats/")
      .then(async (res) => {
        totalPatientsDealt = Number(res.data[0].totalPatientsDealt);
        totalSale = Number(res.data[0].totalSale);
        userStatsId = res.data[0].id;
        totalPatientsDealt += 1;
        totalSale += ctSPrice;
        const userStatsData = {
          id: userStatsId,
          totalPatientsDealt: totalPatientsDealt,
          totalSale: totalSale,
        };
        const res2 = await api.patch("api/userStats/", userStatsData);
        if (res2.status === 202) {
          console.log(res2.data);
        } else {
          console.log("something went wrong in patching userStats");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //function to handle admin stats
  const handleAdminStats = async () => {
    const res22 = await api
      .get("api/lushCubesStats/")
      .then(async (res) => {
        console.log(res.data);
        lcStatsId = res.data[0].id;
        lctotalPatients = Number(res.data[0].total_patients);
        lctotalSale = Number(res.data[0].total_sale);
        lctotalPatients += 1;
        lctotalSale += ctSPrice;
        const adminStatsData = {
          id: lcStatsId,
          total_patients: lctotalPatients,
          total_sale: lctotalSale,
        };

        const res2 = await api.patch("api/lushCubesStats/", adminStatsData);
        if (res2.status === 202) {
          console.log(res2.data);
        } else {
          console.log("something went wrong in patching lushCubes Stats");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // function to handle slip save
  const handleSaveSlip = async () => {
    setIsloading(true);
    const slipData = {
      user: userId,
      patient_detail: patientId,
      service_detail: serviceId,
    };

    console.log(userId, patientId, serviceId);
    const res22 = await api
      .post("api/slips/", slipData)
      .then((res) => {
        console.log(res.data);
        slipId = res.data.id;
        console.log(slipId);
        return res.status;
      })
      .catch((err) => {
        console.log(err);
        setIsloading(false);
        ErrorNotification();
      });

    if (res22 === 201) {
      handleCashTally();
      handleUserStats();
      handleAdminStats();
      setIsloading(false);
      savedNotification();
    }
  };

  const NotFoundNotification = () => {
    toast.warn("Nothing Found", {
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

  const ErrorNotification = () => {
    toast.error("Something Went Wrong", {
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

  const savedNotification = () => {
    toast.success("Slip Successfully Saved", {
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
    <div className="w-full h-full flex flex-col items-center">
      <h1 className="text-lushText text-2xl font-bold mt-12">
        Patient Registration
      </h1>
      <div className="new-old-btns ml-auto mt-10 mr-20">
        <button className="custom-btn bg-lushPrimary mr-4" onClick={handleOld}>
          Old
        </button>
        <button
          className="custom-btn bg-lushPrimary"
          onClick={() => setShowNew((prev) => !prev)}
        >
          New
        </button>
      </div>

      {showOld && (
        <div className="flex flex-col items-center">
          <h1 className="text-lushText mt-12">
            Selecting from old Patients Record
          </h1>
          <div className="flex flex-row items-center w-full mt-10">
            <p className="text-lushText mr-10">Searh Patient</p>
            <input
              className="custom-serach-textField pl-6 focus:outline-none focus:ring-2 focus:ring-lushPrimary"
              type="text"
              value={searchPatient}
              onChange={(e) => setSearchPatient(e.target.value)}
              placeholder="Search id"
            />
            <button
              className="custom-search-btn flex flex-row justify-center items-center bg-lushPrimary ml-20"
              onClick={handleSearchPatient}
            >
              <p className="text-lushText">Search</p>
              <img
                src="/src/assets/Search.png"
                className="w-6 h-6 ml-4"
                alt=""
              />
            </button>
          </div>
          {showInvalid && <p className="text-red-600 mt-10">Not Found</p>}
          {!showInvalid && <p className="text-lushText">Name : {pname}</p>}
        </div>
      )}

      {showNew && (
        <UserCreateNewPatient setShowOld={setShowOld} setShowNew={setShowNew} />
      )}

      {showServiceSearch && (
        <div className="flex flex-col items-center">
          <h1 className="text-lushText mt-12">Select service</h1>
          <div className="flex flex-row items-center w-full mt-10">
            <p className="text-lushText mr-10">Search Service</p>
            <input
              className="custom-serach-textField pl-6 focus:outline-none focus:ring-2 focus:ring-lushPrimary"
              type="text"
              value={searchService}
              onChange={(e) => setSearchService(e.target.value)}
              placeholder="Search id"
            />
            <button
              className="custom-search-btn flex flex-row justify-center items-center bg-lushPrimary ml-20"
              onClick={handleServiceSearch}
            >
              <p className="text-lushText">Search</p>
              <img
                src="/src/assets/Search.png"
                className="w-6 h-6 ml-4"
                alt=""
              />
            </button>
          </div>
          {showInvalid2 && <p className="text-red-600 mt-10">Not Found</p>}
          {!showInvalid2 && <p className="text-lushText">Name : {sname}</p>}
          {isLoading && <Loader />}
          {showServiceSearchBtn && (
            <div className="mt-12 flex flex-row justify-center items-center">
              <button
                onClick={handleSaveSlip}
                className="custom-search-btn flex flex-row justify-center items-center bg-lushPrimary ml-20"
              >
                <p className="text-lushText">Save Slip</p>
                <img
                  src="/src/assets/save.png"
                  className="w-6 h-6 ml-4"
                  alt=""
                />
              </button>

              <button className="custom-search-btn flex flex-row justify-center items-center bg-lushPrimary ml-20">
                <p className="text-lushText">Print</p>
                <img
                  src="/src/assets/print.png"
                  className="w-6 h-6 ml-4"
                  alt=""
                />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserPatientRegistration;
