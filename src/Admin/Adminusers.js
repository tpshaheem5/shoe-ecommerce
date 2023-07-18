import React, { useContext, useState } from 'react';
import { myContext } from '../pages/Context';
import './Adminusers.css'; // Import CSS file

function Adminusers() {
  const { user } = useContext(myContext);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (userInfo) => {
    setSelectedUser(userInfo);
  };

  return (
    <div className="admin-users-container">
      <h1>Registered User List</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user.id} className="user-row">
              <td>{user.name}</td>
              <td>{user.password}</td>
              <td>
                <button onClick={() => handleUserClick(user)}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <div className="user-details">
          <h2>User Details</h2>
          <p><strong>Name:</strong> {selectedUser.name}</p>
          <p><strong>Password:</strong> {selectedUser.password}</p>
        </div>
      )}
    </div>
  );
}

export default Adminusers;
