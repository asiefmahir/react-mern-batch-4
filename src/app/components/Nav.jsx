import Link from "next/link";

const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/add-product">Add Product</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
