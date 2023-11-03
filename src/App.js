import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then(response => {
        setUsers(response.data.users);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <center>
      <h1>Dummy Data</h1>
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>E-mail</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
            
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.Profilepic}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.domain}</td>
                <td>{user.ip}</td>
                <td>{user.university}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      </center>
    </div>
  );
}

export default UserTable;
