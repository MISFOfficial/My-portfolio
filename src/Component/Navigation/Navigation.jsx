import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { GrProjects, GrResume } from 'react-icons/gr';
import { MdAdminPanelSettings } from 'react-icons/md';
import { SiDataiku } from 'react-icons/si';
import { NavLink } from 'react-router';

const Navigation = () => {
    return (
        <div className=' hidden lg:flex lg:flex-col gap-10'>
            <NavLink to='/deshboard'>
                <div className='border p-4 border-gray-600 rounded-md bg-linear-to-r/srgb from-[#1b1b1b] to-[#464a4a]'>
                    <div className='justify-items-center'>
                       <div className='text-[40px]'><MdAdminPanelSettings></MdAdminPanelSettings></div>
                    </div>
                </div>
            </NavLink>
            <ul className=''>
                <NavLink to="/" className={({ isActive }) => isActive ? 'text-green-500' : 'text-white'}>
                    <li className='border p-4 border-gray-600 rounded-t-md flex flex-col items-center justify-center gap-1 bg-gradient-to-r from-[#1b1b1b] to-[#464a4a] duration-200'>
                        <div className='text-2xl'><SiDataiku /></div>
                        <p className='font-semibold'>About</p>
                    </li>
                </NavLink>

                <NavLink to='/resume' className={({ isActive }) => isActive ? 'text-green-500' : 'text-white'}>
                    <li className='border-x border-b p-4 border-gray-600 flex flex-col items-center justify-center gap-1 bg-linear-to-r/srgb from-[#1b1b1b] to-[#464a4a] duration-200'>
                        <div className='text-2xl'><GrResume></GrResume></div>
                        <p className='font-semibold'>Resume</p>
                    </li>
                </NavLink>

                <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-green-500' : 'text-white'}>
                    <li className='border-x border-b p-4 border-gray-600 flex flex-col items-center justify-center gap-1 bg-linear-to-r/srgb from-[#1b1b1b] to-[#464a4a] duration-200'>
                        <div className='text-2xl'><GrProjects></GrProjects></div>
                        <p className='font-semibold'>Projects</p>
                    </li>
                </NavLink>


                <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-green-500' : 'text-white'}>
                    <li className='border-x border-b p-4 border-gray-600 flex flex-col items-center justify-center gap-1 rounded-b-md bg-linear-to-r/srgb from-[#1b1b1b] to-[#464a4a] duration-200'>
                        <div className='text-2xl'><FaTelegramPlane></FaTelegramPlane></div>
                        <p className='font-semibold'>Contact</p>
                    </li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;