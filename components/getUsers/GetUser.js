import React, { useState, useEffect } from "react";
import { getAllUsers } from "@/Store/authCreators";
import { useDispatch } from "react-redux";

const GetUser = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  const getLatestUser = async () => {
    const temp = await getAllUsers();
    setUsers(temp);
  };

  useEffect(() => {
    getLatestUser();
  }, []); // Empty dependency array to run the effect only once on component mount

  if (users.length === 0) {
    return (
      <div className="bg-white">
        Loading....
        <button className="" onClick={getLatestUser}>
          Get latest User
        </button>
      </div>
    );
  }

  return (
    <div>
      <table>
        <thead>
          <tr
            style={{
              color: "white",
              border: "1px solid white",
              width: "fit-content",
            }}
            key="heading"
          >
            <th>name</th>
            <th>email</th>
            <th>password</th>
            <th>permissions</th>
          </tr>
        </thead>
        <tbody className="text-white border-white">
          {users.map((user) => (
            <tr key={user.key}>
              <td className="text-white border border-slate-50">{user.name}</td>
              <td className="text-white border border-white">{user.email}</td>
              <td className="text-white border border-white">
                {user.password}
              </td>
              <td className="text-white border border-white">
                {user.permissions}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="text-cyan-50" onClick={getLatestUser}>
        Get latest User
      </button>
    </div>
  );
};

export default GetUser;
