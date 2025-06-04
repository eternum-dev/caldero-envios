import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext, MapContext } from "../context";
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
  const navigate = useNavigate();
  const { user, loading: authLoading } = useContext(AuthContext);
  const { local } = useContext(MapContext);

  const initialSetupCompleted = local?.user?.initialSetupCompleted || true;
  const { homePath, wizardPath } = protectedRouteData;

  useEffect(() => {
    if (!authLoading) {
      // Si el usuario no se encuentra registrado, redirige a /home
      if (!user) {
        navigate(homePath);
        return;
      }
      // Si el setup inicial no está completo, redirige a /wizard
      if (!initialSetupCompleted) {
        navigate(wizardPath);
        return;
      }
      return;
    }
  }, [authLoading, user, initialSetupCompleted, navigate]);

  if (authLoading || !local) return <h4>...loading</h4>;

  return (
    <>
      <Outlet />
    </>
  );
};
