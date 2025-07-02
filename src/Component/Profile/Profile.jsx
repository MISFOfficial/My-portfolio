import React from 'react';
import { FaGithub, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import Whatsapp from '../Contact/Whatsapp';
import Typewriter from 'typewriter-effect';

const Profile = () => {
    return (
        <div className=' md:w-fit px-5 lg:px-0 h-full lg:h-fit mb-5 lg:mb-0 relative  overflow-hidden group bg-linear-to-r/srgb from-[#000000] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300 rounded-xl'>
            <div className='w-full  justify-items-center mt-5 lg:mt-0'>
                <img className=' md:w-40 md:h-40 lg:w-80 lg:h-auto rounded-4xl lg:rounded-b-[0px] lg:rounded-t-xl  lg:mb-0 ' src="/profile.jpg" alt="" />
            </div>
            <div>
                {/* animated reflection */}
                <span className="absolute right-0 w-30 h-full top-0 transition-all duration-1500 transform translate-x-35 bg-white opacity-5 -skew-x-12 group-hover:-translate-x-90 ease"></span>

                {/* content */}
                <div className='text-center py-5'>
                    <h1 className='text-3xl font-bold muksitul'>Muksitul Islam</h1>

                    <h1 className='text-green-400 font-bold'>
                        <Typewriter
                            options={{
                                strings: ['Full Stack Engineer', 'MERN Stack Engineer', 'Fontend Engineer', 'Backend Engineer', 'UI/UX Designer'],
                                autoStart: true,
                                loop: true,
                                delay: 30,
                                deleteSpeed:30
                                
                            }}>
                        </Typewriter>
                    </h1>
                    <div className='mt-5 flex items-center justify-center gap-3'>
                        {/* git btn */}
                        <a target='_blank' href='https://github.com/MISFOfficial' className="relative  cursor-pointer overflow-hidden group bg-linear-to-r/srgb from-[#000000] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300  p-3 rounded-[100px]">
                            <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
                            <div className='text-3xl'>
                                <FaGithub></FaGithub>
                            </div>
                        </a>
                        {/* LinkedIn btn */}
                        <a target='_blank' href='https://www.linkedin.com/in/msfofficial/'  className="relative  cursor-pointer overflow-hidden group bg-linear-to-r/srgb from-[#000000] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300  p-3 rounded-[100px]">
                            <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
                            <div className='text-3xl'>
                                <FaLinkedinIn></FaLinkedinIn>
                            </div>
                        </a>
                        {/* youtube btn */}
                        <a target='_blank' href='https://www.youtube.com/@misf-official'   className="relative  cursor-pointer overflow-hidden group bg-linear-to-r/srgb from-[#000000] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300  p-3 rounded-[100px]">
                            <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
                            <div className='text-3xl'>
                                <FaYoutube></FaYoutube>
                            </div>
                        </a >
                    </div>
                    <div className='divider px-5'></div>
                    <Whatsapp></Whatsapp>
                </div>
            </div>
        </div >
    );
};

export default Profile;