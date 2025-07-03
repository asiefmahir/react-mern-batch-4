import Nav from "../components/Nav";
import { Outlet } from "react-router";
export default function RootLayout() {
	console.log("I am rendered");

	return (
		<>
			<div id="sidebar">
				<Nav />
			</div>
			<div id="detail">
				<Outlet />
				{/* <About /> */}
				{/* <Team /> */}
			</div>
		</>
	);
}

// function add(a, b) {
// 	return a + b;
// }

// add (10, 20)

// add (100, 200)
