import { useState } from "react";
import "../form.css";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";

const Login = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const navigate = useNavigate();

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const res = await signInWithEmailAndPassword(
				auth,
				user.email,
				user.password,
			);

			if (res.user) {
				setIsLoading(false);
				setErrorMessage("");
				console.log(res.user);
				navigate("/");
			}
		} catch (error) {
			setIsLoading(false);
			setErrorMessage(error.message);
		}
	};

	return (
		<section className="auth">
			<h1>Login</h1>
			<form onSubmit={submitHandler}>
				<div className="control">
					<label htmlFor="email">Your Email</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						value={user.email}
						onChange={handleChange}
					/>
				</div>
				<div className="control">
					<label htmlFor="password">Your Password</label>
					<input
						type="password"
						id="password"
						name="password"
						required
						value={user.password}
						onChange={handleChange}
					/>
				</div>
				<div className="actions">
					{!isLoading && <button>Login</button>}
					{isLoading && <p>Sending request...</p>}
					{errorMessage && (
						<h3 style={{ color: "red" }}>{errorMessage}</h3>
					)}
				</div>
			</form>
		</section>
	);
};

export default Login;
