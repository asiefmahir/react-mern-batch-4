import { useState } from "react";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";

import "../form.css";

const SignupForm = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});
	const [isLoading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const navigate = useNavigate();

	const handleChange = (e) => {
		console.log(e.target.name);

		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			await createUserWithEmailAndPassword(
				auth,
				user.email,
				user.password,
			);

			await setDoc(doc(db, "users", auth.currentUser.uid), {
				email: user.email,
				role: "user",
			});
			setLoading(false);
			setErrorMessage("");
			navigate("/login");
		} catch (error) {
			setErrorMessage(error.message);
			setLoading(false);
		}
	};
	// const navigate = useNavigate();

	return (
		<main>
			<section className="auth">
				<h1>Please Register</h1>
				<form onSubmit={submitHandler}>
					<div className="control">
						<label htmlFor="email">Your Email</label>
						<input
							type="email"
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
							name="password"
							required
							value={user.password}
							onChange={handleChange}
						/>
					</div>
					<div className="actions">
						{!isLoading && <button type="submit">Register</button>}
						{isLoading && <p>Creating New User</p>}
						{errorMessage && (
							<p style={{ color: "red" }}>{errorMessage}</p>
						)}
					</div>
				</form>
			</section>
		</main>
	);
};

export default SignupForm;
