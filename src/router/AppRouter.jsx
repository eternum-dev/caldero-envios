import { useState } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { AuthPage } from "../pages/AuthPage";
import { MapPage } from "../pages/MapPage";
import { ProtectedRoute } from "../components/ProtectedRoute";




export const AppRouter = () => {

    const [status, setStatus] = useState(null);


    if (status === 'checking') {
        console.log(setStatus)
        return (
            <h2>...cargando</h2>
        )
    }


    return (
        <Routes>


            {/* Public Routes */}

            <Route path="/auth/" element={<AuthPage />} />

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