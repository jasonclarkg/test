import React, { useState, useEffect } from 'react'
import axios from 'axios';

const AddUserForm = props => {
	const initialState = { 
		id: null, 
		name: '', 
		email: '', 
		contact: ''
	}
	const [ user, setUser ] = useState(initialState)
	const [loading, isLoading] = useState(false)

	const handleInputChange = event => {
		event.preventDefault();
		console.log(user)
		const { name, value } = event.target
		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.email || !user.contact) 
				
				return

				props.addUser(user)
				setUser(initialState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" placeholder="Input Text" value={user.name} onChange={handleInputChange} />
			<label>Email</label>
			<input type="text" placeholder="Input Text" name="email" value={user.email} onChange={handleInputChange} />
			<label>Contact</label>
			<input type="tel" id ="tel" name="contact" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={user.contact} placeholder="Format: 123-456-7890" onChange={handleInputChange} />
			<button>Add/Update</button>
		</form>
	)
}

export default AddUserForm;
