import { useNavigate } from 'react-router-dom';

const Login = (props) => {
	const navigate = useNavigate();

	const onSubmit = (e) => {
		e.preventDefault();
		props.onLogin('aditya');
		navigate('/');
	};

	return (
		<div>
			<h2>Login</h2>
			<form>
				<div>
					username <input type="text" />
				</div>
				<div>
					password <input type="password" />
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;
