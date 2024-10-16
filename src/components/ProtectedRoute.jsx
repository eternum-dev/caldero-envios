import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context";

/**
 * ProtectedRoute component.
 * It restricts access to routes based on user authentication status.
 *
 * @component
 *  to the login page.
 *
 * @example
 * return (
 *  <ProtectedRoute />
 * )
 * 
 * @returns {JSX.Element} Renders an outlet for nested routes if user is authenticated, otherwise redirects
 */

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
