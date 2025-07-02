import React from 'react';
import { FaHome, FaTelegramPlane } from 'react-icons/fa';
import { SiDataiku } from 'react-icons/si';
import { NavLink } from 'react-router';
import { TbSmartHome } from "react-icons/tb";
import { GrProjects, GrResume } from 'react-icons/gr';

const FooterNav = () => {
    return (
        <div className='flex items-center gap-2'>
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-green-500 border border-green-600 rounded-md' : 'text-white border border-gray-400 rounded-md'}>
                <li className=' p-2  rounded-md flex flex-col items-center justify-center gap-1 bg-gradient-to-r from-[#1b1b1b] to-[#464a4a] duration-200'>
                    <div className=''><TbSmartHome></TbSmartHome></div>
                </li>
            </NavLink>
            <NavLink to="/resume" className={({ isActive }) => isActive ? 'text-green-500 border border-green-600 rounded-md' : 'text-white border border-gray-400 rounded-md'}>
                <li className=' p-2  rounded-md flex flex-col items-center justify-center gap-1 bg-gradient-to-r from-[#1b1b1b] to-[#464a4a] duration-200'>
                    <div className=''><GrResume></GrResume></div>
                </li>
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-green-500 border border-green-600 rounded-md' : 'text-white border border-gray-400 rounded-md'}>
                <li className=' p-2  rounded-md flex flex-col items-center justify-center gap-1 bg-gradient-to-r from-[#1b1b1b] to-[#464a4a] duration-200'>
                    <div className=''><GrProjects></GrProjects></div>
                </li>
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-green-500 border border-green-600 rounded-md' : 'text-white border border-gray-400 rounded-md'}>
                <li className=' p-2  rounded-md flex flex-col items-center justify-center gap-1 bg-gradient-to-r from-[#1b1b1b] to-[#464a4a] duration-200'>
                    <div className=''><FaTelegramPlane></FaTelegramPlane></div>
                </li>
            </NavLink>
        </div>
    );
};

export default FooterNav;