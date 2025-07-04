import { useAuth } from "../contexts/Auth";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
	const { userLoggedIn } = useAuth();
	return userLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
