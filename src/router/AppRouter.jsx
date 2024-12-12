import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  AuthPage,
  Branches,
  Deliveryman,
  HomePage,
  MapPage,
  Password,
  Profile,
} from "../pages";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { AuthContext } from "../context/auth/AuthContext";
import { routePaths } from "../data";

export const AppRouter = () => {
  const { user, loading } = useContext(AuthContext);
  const { otherRoute, privatePath, publicPath, initialPath } = routePaths;
  const { auth, home } = publicPath;

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <Routes>
      {/* Public Routes  */}
      <Route path={home} element={<HomePage />} />
      <Route path={auth.path} element={<AuthPage />} />

      {/* Private Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path={privatePath.map} element={<MapPage />} />
        <Route path={privatePath.profile} element={<Profile />} />
        <Route path={privatePath.password} element={<Password />} />
        <Route path={privatePath.deliveryman} element={<Deliveryman />} />
        <Route path={privatePath.branches} element={<Branches />} />
      </Route>

      {/* Catch-all Route 
        Redirect any unmatched paths to the initial path  */}
      <Route
        path={otherRoute.path}
        element={<Navigate to={otherRoute.navigateTo} />}
      />

      {/* Initial Route */}
      {/* Redirects to /home if user is not authenticated, or to /map if authenticated */}
      <Route
        path={initialPath}
        element={
          !user ? <Navigate to={home} /> : <Navigate to={privatePath.map} />
        }
      />
    </Routes>
  );
};
