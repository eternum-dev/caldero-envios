import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from '../context/auth/AuthContext';



export const ProtectedRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) return <h4>...loading</h4>;

    if (!user) return (
        <Navigate to="/auth" />
    );
    
    return (
        <>
            {children}
        </>
    )
}


ProtectedRoute.propTypes = {
    children: PropTypes.any
}