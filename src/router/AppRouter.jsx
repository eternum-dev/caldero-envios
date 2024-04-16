import { useState } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { AuthPage } from "../pages/AuthPage";
import { MapPage } from "../pages/MapPage";




export const AppRouter = () => {

    const [status, setStatus] = useState('not-authenticated');

    if (status === 'checking') {
        console.log(setStatus)
        return (
            <h2>...cargando</h2>
        )

    }

    return (
        <Routes>
            {
                status === 'not-authenticated' ?
                    (
                        <>
                        {/* Public Routes */}

                            <Route path="/auth/" element={<AuthPage />} />
                            <Route path="/*" element={<Navigate to='/auth/' />} />
                        </>
                    ) :
                    (
                        <>
                            {/* Private Routes */}
                            <Route path="/" element={<MapPage />} />
                            <Route path="/*" element={<Navigate to='/' />} />
                        </>
                    )
            }

        </Routes>

    )
}