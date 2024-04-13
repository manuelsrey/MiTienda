import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute({ children }) {
    const { isLoggedIn } = useAuth();
    const location = useLocation();

    return isLoggedIn ? children : <Navigate to={"/login"} state={location}/>
}

export default ProtectedRoute;