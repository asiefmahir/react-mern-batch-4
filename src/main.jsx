import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	// <StrictMode>
	<App />,
	// </StrictMode>,
);

{
	/* <App /> */
}

// react Dom  -> Main DOM -> React Code / Component

// 'use strict'

// export default function addAbc(a, b) {
// 	return a + b;
// }

// // import

// export const add = (a, b) => {
// 	return a + b;
// };
