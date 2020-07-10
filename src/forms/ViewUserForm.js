import React from 'react';
import { Link } from "react-router-dom";

const ViewUserForm = props => (
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Contact</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.contact}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default ViewUserForm;
