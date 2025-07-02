import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../../../Auth/AuthContext';

const Profile = () => {
    const { logout } = use(AuthContext)

    const navigate = useNavigate()

    const handlelogout = () => {
        logout()
            .then(() => {
                navigate('/')
            })
            .catch(() => {
                // console.log(e)
                alert()
            })
    }
    return (
        <div className='flex flex-col w-80 border h-screen scroll-auto bg-accent sticky z-[100] top-0'>
            <div className='justify-items-center mt-10'>
                <img className='border rounded-[100%] w-50 h-50' src="/public/images.png" alt="" />
            </div>
            <ul>
                <Link to='/deshboard'>
                    <li>About</li>
                </Link>
                <Link to='/deshboard/all_project'>
                    <li>All Project</li>
                </Link>
                <Link to='/deshboard/upload_project'>
                    <li>Upload Project</li>
                </Link>
            </ul>
            <button onClick={handlelogout} className='btn'>sign out</button>
            <Link to='/' className='btn mt-3'>Home</Link>
        </div>
    );
};

export default Profile;