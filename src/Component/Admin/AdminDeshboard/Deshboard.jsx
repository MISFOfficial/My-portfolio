import React from 'react';
import Profile from './Profile/Profile';
import { Outlet } from 'react-router';

const Deshboard = () => {

    return (
        <div className='flex'>
            <div>
                <Profile></Profile>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Deshboard;