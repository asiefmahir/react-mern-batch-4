import { Link } from "react-router";
import { useAuth } from "../contexts/Auth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Nav = () => {
	const { userLoggedIn, role } = useAuth();
	return (
		<div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				{userLoggedIn && (
					<li>
						<Link to="/cart">Cart</Link>
					</li>
				)}
				{!userLoggedIn && (
					<>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/sign-up">SignUP</Link>
						</li>
					</>
				)}
				<li>
					{userLoggedIn && role === "admin" && (
						<Link to="admin/add-product">Add Product</Link>
					)}
				</li>
				{userLoggedIn && (
					<li>
						<button onClick={() => signOut(auth)}>Logout</button>
					</li>
				)}
			</ul>
		</div>
	);
};

export default Nav;
