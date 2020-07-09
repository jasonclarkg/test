import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
/* import { Route, Switch } from 'react-router-dom'; */

const App = () => {
	// Data
	const usersData = [
		{ id: 1, name: 'Tania', email: 'floppydiskette@test.com', contact: '123-456-789' },
		{ id: 2, name: 'Craig', email: 'siliconeidolon@test.com', contact: '123-456-789'},
		{ id: 3, name: 'Ben', email: 'benisphere@test.com', contact: '123-456-789' },
	]

	const initialState = { 
		id: null, 
		name: '', 
		email: '', 
		contact: '' 
	}

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialState)
	const [ editing, setEditing ] = useState(false)
	const [isLoading, setIsLoading] = useState(false);

	console.log("Rendering");

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, email: user.email, contact: user.contact })
	}

	return (
		<div className="container">
			<h1>Contact List with React JS by Jason Clark Galang</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add user</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View users</h2>
					<UserTable 
					users={users} 
					editRow={editRow} 
					deleteUser={deleteUser}
					 />
				</div>
			</div>
		</div>
	)
}

export default App
