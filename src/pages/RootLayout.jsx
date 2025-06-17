import Nav from "../components/Nav";
import { Outlet } from "react-router";
export default function RootLayout() {
	console.log("I am rendered");

	return (
		<>
			<div id="detail">
				<Outlet />
				{/* <About /> */}
				{/* <Team /> */}
			</div>
			<div id="sidebar">
				<h1>Our App</h1>
				<Nav />
			</div>
		</>
	);
}

// function add(a, b) {
// 	return a + b;
// }

// add (10, 20)

// add (100, 200)
