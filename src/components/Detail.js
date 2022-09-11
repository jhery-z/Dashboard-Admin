import {Container, Row, Col} from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
 
const Detail = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { id } = useParams();
 
  useEffect(() => {
    getUserById();
  }, []);
 
  const getUserById = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    setName(response.data.name);
    setUsername(response.data.username);
    setEmail(response.data.email);
    setPhone(response.data.phone);
  };
 
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">User Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="User Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Phone</label>
            <div className="control">
            <input
                type="text"
                className="input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          
        </form>
      </div>
    </div>
  );
};
 
export default Detail;