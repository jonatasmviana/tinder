import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import api from '../services/api';
import './Login.css'

export default function Login({ history }) {

	const [username, setUsername] = useState('');

	async function handleSubmit(e) {
		e.preventDefault();

		const cleanUser = username.trim();

		const response = await api.post('/devs', { username: cleanUser });

		const { _id } = response.data;

		history.push(`/dev/${_id}`);
	}

	return (
		<div className="login-container">
			<form onSubmit={handleSubmit}>
				<img src={logo} alt="deu ruim" />

				<input
					value={username}
					onChange={e => setUsername(e.target.value)}
					placeholder="Digite seu usuario do github" />

				<button type="submit">ENTRAR</button>
			</form>
		</div>
	);
}