import React, { useEffect, useState } from 'react';
import { motion } from "motion/react"// eslint-disable-line no-unused-vars
import { FiTriangle } from 'react-icons/fi';
import { SiGoogleearthengine } from 'react-icons/si';
import { useLoaderData, useNavigate } from 'react-router';
import Profile from '../Profile/Profile';
import Skill from '../Resume/Skill';

const About = () => {

    const data = useLoaderData()
    const navigate = useNavigate()
    const [isMedia, setIsMedia] = useState(window.innerWidth < 769)

    useEffect(() => {
        const handleResize = () => {
            setIsMedia(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const motionConfig1 = isMedia
        ? { initial: { y: 50, opacity: 0 }, whileInView: { y: 0, opacity: 1 } }
        : { initial: { x: 50, opacity: 0 }, whileInView: { x: 0, opacity: 1 } };

    const project = () => {
        navigate('/projects')
    }

    return (
        <div className=''>
            <div className='lg:hidden flex flex-col md:flex-row gap-2 mb-5'>
                <div className=''><Profile></Profile></div>
                <Skill></Skill>
            </div>

            {/* top portion */}
            <motion.div

                {...motionConfig1}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}

                className="relative md:px-7 md:py-2 overflow-hidden group bg-linear-to-r/srgb from-[#000000] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300 rounded-xl w-full">
                <span className="absolute right-0 w-30 h-full top-0 transition-all duration-2000 transform translate-x-28 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-200 ease"></span>
                <div className=' justify-items-start p-10'>
                    <h1 className='text-xl md:text-4xl font-bold text-gray-300'>Know about me</h1>
                    <p className=' text-sm md:text-[16px] text-justify mt-4 text-gray-400'>Web development professional with comprehensive understanding of both front-end and
                        back-end frameworks. Proven ability to design and implement scalable web applications
                        while maintaining focus on collaborative team dynamics. Known for adaptability and
                        consistently meeting project deadlines, leveraging skills in JavaScript, HTML,  CSS, vanilla CSS(tailwindCSS), Custom CSS, tools & component and also
                        node js, express js, jwt, mongodb for backend technologies.
                    </p>
                </div>
            </motion.div>

            <div className='flex flex-col-reverse md:flex-row gap-5 mt-5' >
                {/* left portion */}
                <motion.div

                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}

                    className="relative  overflow-hidden group bg-linear-to-r/srgb from-[#000000] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300 rounded-xl w-full h-full">
                    <div className=' justify-items-start p-7'>
                        <div className='flex items-center gap-3'>
                            {/* git btn */}
                            <button className="relative overflow-hidden group bg-linear-to-r/srgb from-[#242424] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300 p-3 rounded-[100px]">
                                <div className='text-3xl'>
                                    <SiGoogleearthengine></SiGoogleearthengine>
                                </div>
                            </button>
                            <h1 className='text-xl'>UI/UX Design</h1>
                        </div>
                        <div className="relative  overflow-hidden group bg-linear-to-r/srgb from-[#242424] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#242424] hover:to-[#464a4a] text-white transition-all ease-out duration-300  p-5 rounded-lg w-full mt-3 h-full ">
                            <div className=''>
                                <div className='flex items-center justify-between'>
                                    <h1>Project completed</h1>
                                    <p className='font-bold text-green-400'>{data.length}+</p>
                                </div>
                                <div className='divider px-0'></div>
                                <p className='text-sm md:text-[16px] text-gray-400'>Designed intuitive user flows and wireframes for product browsing, checkout, and user dashboard. <br />
                                    Implemented responsive layouts and optimized UX for both desktop and mobile devices.</p>
                                <div className='divider px-0'></div>
                                <div className='flex items-center justify-between'>
                                    <h1>Start from </h1>
                                    <p className='font-bold text-green-400'>$200</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="absolute right-0 w-30 h-full top-0 transition-all duration-2000 transform translate-x-28 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-100 ease"></span>
                </motion.div>
                {/* right portion */}
                <motion.div onClick={project}
                    {...motionConfig1}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative cursor-pointer  overflow-hidden group bg-linear-to-r/srgb from-[#000000] to-[#464a4a] hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300 rounded-xl w-full h-full">
                    <div className=' justify-items-start p-7'>
                        <div className='flex items-center gap-3'>
                            {/* git btn */}
                            <button className="relative overflow-hidden group bg-linear-to-r/srgb from-[#242424] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300  p-3 rounded-[100px]">
                                <div className='text-3xl'>
                                    <FiTriangle></FiTriangle>
                                </div>
                            </button>
                            <h1 className='text-xl'>Web Devolopment</h1>
                        </div>
                        <div className="relative   overflow-hidden group bg-linear-to-r/srgb from-[#242424] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#242424] hover:to-[#464a4a] text-white transition-all ease-out duration-300  p-5 rounded-lg w-full mt-3 h-full">
                            <div className=''>
                                <div className='flex items-center justify-between'>
                                    <h1>Project completed</h1>
                                    <p className='font-bold text-green-400'>{data.length}+</p>
                                </div>
                                <div className='divider px-0'></div>
                                <p className=' text-sm md:text-[16px] text-gray-400'>Designed and developed a fully responsive  using React.js, Tailwind CSS, and Framer Motion express, node, mongodb etc. Features include dynamic routing, animation effects, and modular components to showcase projects and skills.</p>
                                <div className='divider px-0'></div>
                                <div className='flex items-center justify-between'>
                                    <h1>Start from </h1>
                                    <p className='font-bold text-green-400'>$300</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="absolute right-0 w-30 h-full top-0 transition-all duration-2000 transform translate-x-28 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-100 ease"></span>
                </motion.div>
            </div>
        </div>
    );
};

export default About;