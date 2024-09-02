import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context";

export const ProtectedRoute = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <h4>...loading</h4>;

  if (!user) return <Navigate to="/auth" />;

  return (
    <>
      <Outlet />
    </>
  );
};
