import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  console.log("PrivateRoute - isAuthenticated:" + children, isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/" replace />;
}
