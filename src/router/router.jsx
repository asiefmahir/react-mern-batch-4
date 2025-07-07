import { createBrowserRouter } from "react-router";
import Shop from "../pages/Shop";
import RootLayout from "../pages/RootLayout";
import Cart from "../pages/Cart";
import SignupForm from "../pages/SignupForm";
import Login from "../pages/Login";
import PrivateRoute from "../components/PrivateRoute";
import AddProductForm from "../pages/ProductAddForm";
import PrivateAdminRoute from "../components/PrivateAdminRoute";

export const rootRouter = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ path: "/", index: true, element: <Shop /> },
			{
				path: "/cart",
				element: (
					<PrivateRoute>
						<Cart />
					</PrivateRoute>
				),
			},
			{
				path: "/admin/add-product",
				element: (
					<PrivateAdminRoute>
						<AddProductForm />
					</PrivateAdminRoute>
				),
			},
			{ path: "/sign-up", element: <SignupForm /> },
			{ path: "/login", element: <Login /> },
		],
	},
]);
