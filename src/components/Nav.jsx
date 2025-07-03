import { Link } from "react-router";

const Nav = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/cart">Cart</Link>
				</li>
				<li>
					<Link to="/add-product">Add Product</Link>
				</li>
				<li>
					<Link to="/sign-up">Sign Up</Link>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
