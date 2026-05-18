import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("prime_shape_token");

  if (!token) {
    return <Navigate to="/login-metodo" replace />;
  }

  return children;
}