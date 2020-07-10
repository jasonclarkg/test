import React from 'react';


const UserTable = props => (
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
            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="button btn-secondary"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="button btn-info"
              >
                View
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4}>Please add a new contact </td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable;
