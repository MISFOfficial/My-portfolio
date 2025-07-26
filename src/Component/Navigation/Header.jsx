import React from 'react';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { TiArrowDownThick } from 'react-icons/ti';
import { Link } from 'react-router';
import Menu from './Menu';

const Header = () => {
    return (
        <div className='border-b flex items-center justify-between h-15 md:h-20 border-gray-600 backdrop-blur-xl'>
            <img className='pl-2 md:pl-5 lg:pl-0 w-18 lg:w-20' src="/muksitul-logo-2.png" alt="" />
            <div className='flex items-center gap-3'>
                {/* button */}
                <a href="https://drive.google.com/file/d/1gTvAw7IgJQOF6YHg8uEo5qP11VIYIQC7/view?usp=sharing" target='_blank'>

                    <button className="relative px-3 py-3 md:px-5 md:py-2 cursor-pointer overflow-hidden group bg-linear-to-r/srgb from-[#000000] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300 rounded-2xl">

                        <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>

                        <span className="relative text-sm lg:text-xl font-semibold flex items-center">Resume<span className='animate-bounce text-sm'><TiArrowDownThick></TiArrowDownThick></span></span>

                    </button>
                </a>

                {/* menu */}
                <div className="drawer lg:hidden pr-2 md:pr-5 lg:pr-0">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="btn bg-green-600 drawer-button"><HiOutlineMenuAlt3></HiOutlineMenuAlt3></label>
                    </div>
                    <Menu></Menu>
                </div>
            </div>
        </div>
    );
};

export default Header;