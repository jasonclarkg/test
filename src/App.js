import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {


	const initialState = { 
		id: null, 
		name: '', 
		email: '', 
		contact: '' 
	}

	// Setting state
	const [ users, setUsers ] = useState('')
	const [ existingUser, setExistingUser ] = useState(initialState)
	const [ editUser, setEditUser ] = useState(false)
	const [isLoading, setIsLoading] = useState(false);

	console.log("Renderingz");

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditUser(false)
		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditUser(false)
		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditUser(true)
		setExistingUser({ id: user.id, name: user.name, email: user.email, contact: user.contact })
	}

	/* const viewData = (user, id) => {
		set
	} */

	return (
		<div className="container mt-4">
			<div className="flex-column">
				<div className="flex-large">
					{editUser ? (
						<Fragment>
							
							<EditUserForm
								edit={editUser}
								setEdit={setEditUser}
								existingUser={existingUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-small mt-4">
					
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
