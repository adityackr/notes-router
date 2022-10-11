import { useState } from 'react';
import { Link, Navigate, Route, Routes, useMatch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Note from './components/Note';
import Notes from './components/Notes';
import Users from './components/Users';

const App = () => {
	const [notes, setNotes] = useState([
		{
			id: 1,
			content: 'HTML is easy',
			important: true,
			user: 'Aditya Chakraborty',
		},
		{
			id: 2,
			content: 'Browser can execute only JavaScript',
			important: false,
			user: 'Aditya Chakraborty',
		},
		{
			id: 3,
			content: 'Most important methods of HTTP-protocol are GET and POST',
			important: true,
			user: 'Arto Hellas',
		},
	]);
	const [user, setUser] = useState(null);

	const login = (user) => {
		setUser(user);
	};

	const match = useMatch('/notes/:id');
	const note = match
		? notes.find((note) => note.id === Number(match.params.id))
		: null;

	const padding = {
		padding: 5,
	};

	return (
		<div>
			<div>
				<Link style={padding} to="/">
					Home
				</Link>
				<Link style={padding} to="/notes">
					Notes
				</Link>
				<Link style={padding} to="/users">
					Users
				</Link>
				{user ? (
					<em>{user} logged in</em>
				) : (
					<Link style={padding} to="/login">
						Login
					</Link>
				)}
			</div>

			<Routes>
				<Route path="/notes/:id" element={<Note note={note} />} />
				<Route path="/notes" element={<Notes notes={notes} />} />
				<Route
					path="/users"
					element={user ? <Users /> : <Navigate replace to={'/login'} />}
				/>
				<Route path="/login" element={<Login onLogin={login} />} />
				<Route path="/" element={<Home />} />
			</Routes>

			<div>
				<i>Notes app, Aditya Chakraborty 2022</i>
			</div>
		</div>
	);
};

export default App;
