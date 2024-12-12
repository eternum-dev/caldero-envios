import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context";
import { protectedRouteData } from "../data";

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
  const { path } = protectedRouteData;
  
  if (loading) return <h4>...loading</h4>;

  if (!user) return <Navigate to={path} />;

  return (
    <>
      <Outlet />
    </>
  );
};
