import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.jsx";
import { RouterProvider } from "react-router";
import { rootRouter } from "./router/router.jsx";

createRoot(document.getElementById("root")).render(
	// <StrictMode>
	<RouterProvider router={rootRouter} />,
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
