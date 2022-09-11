import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
 
const UserList = () => {
  const [users, setUser] = useState([]);
 
  useEffect(() => {
    getUsers();
  }, []);
 
  const getUsers = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUser(response.data);
  };
 
  
 
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        
        <table className="table table-striped table-responsive-sm">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Link
                    to={`detail/${user.id}`}
                    className="btn btn-info"
                  >
                    Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
 
export default UserList;