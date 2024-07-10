import { Navigate, Route, Routes } from "react-router-dom"
import { AuthPage } from "../pages/AuthPage";
import { MapPage } from "../pages/MapPage";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { HomePage } from "../pages/home/HomePage";




export const AppRouter = () => {


    return (
        <Routes>


            {/* Public Routes  */}

            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />

            {/* Private Routes */}
            <Route path="map/"
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