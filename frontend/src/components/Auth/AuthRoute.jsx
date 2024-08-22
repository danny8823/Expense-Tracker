import React from 'react'
import { getUserFromStorage } from '../../utils/getUserFromStorage';
import { Navigate } from 'react-router-dom';

function AuthRoute({children}) {
    // ? GET THE TOKEN
    const token = getUserFromStorage()
    if(token) {
        return children
    } else {
        return <Navigate to="/login"/>
    }
}

export default AuthRoute