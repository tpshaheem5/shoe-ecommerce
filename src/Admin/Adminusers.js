import React, { useContext, useState } from 'react';
import { myContext } from '../pages/Context';
import './Adminusers.css'; 
import Sidebar from './Sidebar';


function Adminusers() {
  const { user } = useContext(myContext);
  const [selectedUser, setSelectedUser] = useState(null);

  const userClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="admin-users-container" style={{ display: "flex", flexDirection: "row" }}>
        <div>
        <Sidebar/>
        </div>
      <h1> User List</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user.id} className="user-row">
              <td>{user.name}</td>
              {/* <td>{user.password}</td> */}
              <td>
                <button onClick={() => userClick(user)}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <div className="user-details">
          <h2>User Details</h2>
          <p><strong>Name:</strong> {selectedUser.name}</p>
        </div>
      )}
    </div>
  );
}

export default Adminusers;
