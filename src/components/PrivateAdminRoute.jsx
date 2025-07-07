import { Navigate } from "react-router";
import { useAuth } from "../contexts/Auth";

const PrivateAdminRoute = ({ children }) => {
	const { userLoggedIn, role } = useAuth();
	return userLoggedIn &&
		role &&
		(role === "admin" || role === "super-admin") ? (
		children
	) : (
		<Navigate to="/" />
	);
};

export default PrivateAdminRoute;
