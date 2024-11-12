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
  const { user } = useContext(AuthContext);
  const { otherRoute, privatesPath, publicPath } = routePaths;
  const { auth, home } = publicPath;

  return (
    <Routes>
      {/* Public Routes  */}
      <Route path={home} element={<HomePage />} />
      <Route
        path={auth.path}
        element={!user ? <AuthPage /> : <Navigate to={auth.navigateTo} />}
      />

      {/* Private Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path={privatesPath.initial} element={<MapPage />} />
        <Route path={privatesPath.profile} element={<Profile />} />
        <Route path={privatesPath.password} element={<Password />} />
        <Route path={privatesPath.deliveryman} element={<Deliveryman />} />
        <Route path={privatesPath.branches} element={<Branches />} />
      </Route>

      <Route
        path={otherRoute.path}
        element={<Navigate to={otherRoute.navigateTo} />}
      />
    </Routes>
  );
};
