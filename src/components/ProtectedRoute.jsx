import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../context/auth/AuthContext';
import { Navigate } from 'react-router-dom';



export const ProtectedRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) return <h4>...loading</h4>;

    if (!user) return (
        console.log(user),
        <Navigate to="/auth" />
    )



    return (
        <>
            {children}
        </>
    )
}


ProtectedRoute.propTypes = {
    children: PropTypes.any
}