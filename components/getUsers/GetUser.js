import React from "react";
import { useSelector } from "react-redux";
const GetUser = () => {
  const users = useSelector((state) => state.auth.users);

  return (
    <div> 
      <table>
        <tr style={{color:'white',border:'1px solid white',width:'fit-content'}}>
          <th>name</th>
          <th>email</th>
          <th>password</th>
          <th>permissions</th>
        </tr>
        {users && users.map(user=>{
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.permissions}</td>
          </tr>
        })}
      </table>
    </div>
  );
};

export default GetUser;
