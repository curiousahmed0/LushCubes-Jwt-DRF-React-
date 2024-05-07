import React, { useEffect, useState } from "react";
import api from "../../api";

const AdminViewUser = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res22 = await api
      .get("api/user/")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-lushText mt-20 text-2xl font-bold"> Users</h1>
      <div className="h-96 w-[900px] mt-20 overflow-y-auto">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-lushText">
            <thead className="text-xs text-lushText uppercase bg-black">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  First Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Username
                </th>
                <th scope="col" className="px-6 py-3">
                  Age
                </th>
                <th scope="col" className="px-6 py-3">
                  Salary
                </th>
                <th scope="col" className="px-6 py-3">
                  Designation
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((value) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={value.id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {value.id}
                  </th>
                  <td className="px-6 py-4">{value.first_name}</td>
                  <td className="px-6 py-4">{value.last_name}</td>
                  <td className="px-6 py-4">{value.username}</td>
                  <td className="px-6 py-4">{value.profile?.age}</td>
                  <td className="px-6 py-4">{value.profile?.salary}</td>
                  <td className="px-6 py-4">{value.profile?.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminViewUser;
