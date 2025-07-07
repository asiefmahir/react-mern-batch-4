import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { rootRouter } from "./router/router.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { AuthProvider } from "./contexts/Auth.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
	// <StrictMode>
	<Provider store={store}>
		<AuthProvider>
			<ToastContainer />
			<RouterProvider router={rootRouter} />
		</AuthProvider>
	</Provider>,
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
