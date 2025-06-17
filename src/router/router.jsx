import { createBrowserRouter } from "react-router";
import App from "../pages/App";
import About from "../pages/About";
import Team from "../pages/Team";
import RootLayout from "../pages/RootLayout";
import Login from "../pages/Login";
import PostList from "../pages/PostList";
import PostDetails from "../pages/PostDetails";

export const rootRouter = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ path: "/", index: true, element: <App /> },
			{ path: "/about", element: <About /> },
			{ path: "/team", element: <Team /> },
			{ path: "/posts", element: <PostList /> },
			{ path: "/posts/:id", element: <PostDetails /> },
			// posts/5
			// {id: 5}
			// /posts/1
			// 'posts/1',
			// {path: '/dashboard', element: <Dashboard />}
		],
	},

	{ path: "/login", element: <Login /> },
	// { path: "/", element: <App /> },
]);
