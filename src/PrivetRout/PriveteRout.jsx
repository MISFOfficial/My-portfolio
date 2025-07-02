import React, { use } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import { Navigate, NavLink } from 'react-router';
import Loader from '../Component/Loader/Loader';

const PriveteRout = ({ children }) => {

    const { user, loader } = use(AuthContext)

    if(loader){
        return <Loader></Loader>
    }

    if (!user) {
        return <Navigate to='/adminlogin'></Navigate> 
    }

    return children
};

export default PriveteRout;