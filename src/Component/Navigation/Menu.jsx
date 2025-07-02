import React from 'react';
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import Whatsapp from '../Contact/Whatsapp';

const Menu = () => {

    return (
        <div className="drawer-side z-[1000]">
            <label htmlFor="my-drawer" className="drawer-overlay"></label> {/* Clicking this closes it */}
            <ul className="menu p-4 w-70 md:w-90 min-h-full bg-base-200 text-base-content">
                {/* Close button (linked to checkbox) */}
                <label htmlFor="my-drawer" className=" self-end cursor-pointer font-bold text-xl">✕</label>
                <div className='flex flex-col justify-center items-center gap-1 mt-5'>
                    <img className='h-20 w-20 md:h-30 md:w-30 rounded-full' src="/profile.jpg" alt="Profile" />
                    <h1 className='mb-2'>Muksitul Islam</h1>
                </div>

               <Whatsapp></Whatsapp>

                <div className="divider my-2" />
                <li className='font-bold'><NavLink to="/" className={({ isActive }) => isActive ? 'text-green-500' : 'text-white'}>About</NavLink></li>
                <li className='font-bold'><NavLink to="/resume" className={({ isActive }) => isActive ? 'text-green-500' : 'text-white'}>Resume</NavLink></li>
                <li className='font-bold'><NavLink to="/projects" className={({ isActive }) => isActive ? 'text-green-500' : 'text-white'}>Projects</NavLink></li>
                <li className='font-bold'><NavLink to="/contact" className={({ isActive }) => isActive ? 'text-green-500' : 'text-white'}>Contact</NavLink></li>
                <li><Link className='btn bg-green-700 mt-5' to='/deshboard'>Admin</Link></li>

                <div className='divider'></div>

                {/* media */}
                <div className='flex items-center justify-center gap-3'>
                    {/* git btn */}
                    <a target='_blank' href='https://github.com/MISFOfficial' className="relative  cursor-pointer overflow-hidden group bg-linear-to-r/srgb from-[#000000] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300  p-3 rounded-[100px]">
                        <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>

                        <div className='text-xl'>
                            <FaGithub></FaGithub>
                        </div>
                    </a>
                    {/* linkedin btn */}
                    <a target='_blank' href='https://www.linkedin.com/in/msfofficial/' className="relative  cursor-pointer overflow-hidden group bg-linear-to-r/srgb from-[#000000] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300  p-3 rounded-[100px]">
                        <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>

                        <div className='text-xl'>
                            <FaLinkedinIn></FaLinkedinIn>
                        </div>
                    </a>
                    {/* youtube btn */}
                    <a target='_blank' href='https://www.youtube.com/@misf-official' className="relative  cursor-pointer overflow-hidden group bg-linear-to-r/srgb from-[#000000] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300  p-3 rounded-[100px]">
                        <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>

                        <div className='text-xl'>
                            <FaYoutube></FaYoutube>
                        </div>
                    </a>
                </div>
            </ul>
        </div>
    );
};

export default Menu;