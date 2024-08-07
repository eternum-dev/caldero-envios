import { Navigate, Route, Routes } from "react-router-dom"
import { AuthPage } from "../pages/auth/AuthPage";
import { MapPage } from "../pages/map/MapPage";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { HomePage } from "../pages/home/HomePage";
import { useContext } from "react";
import { AuthContext } from "../context/auth/AuthContext";




export const AppRouter = () => {


    const { user } = useContext(AuthContext);

    return (
        <Routes>


            {/* Public Routes  */}

            <Route path="/home" element={<HomePage />} />
            <Route path="/auth" element={!user ? <AuthPage /> : <Navigate to='/' />} />

            {/* Private Routes */}
            <Route path="/"
                element={
                    <ProtectedRoute>
                        <MapPage />
                    </ProtectedRoute>
                }
            >
            </Route>


            <Route path="/*" element={<Navigate to='/' />} />
        </Routes>

    )
}