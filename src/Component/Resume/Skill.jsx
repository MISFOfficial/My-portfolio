import React, { useEffect, useState } from 'react';
import { motion } from "motion/react" // eslint-disable-line no-unused-vars
import { FaCss3, FaGithub, FaGitSquare, FaHtml5, FaNodeJs, FaReact, FaSkiing, FaTeamspeak } from 'react-icons/fa';
import { SiAxios, SiJavascript, SiMongodb, SiNextdotjs, SiNpm, SiReactrouter, SiVercel } from 'react-icons/si';
import { RiFirebaseFill } from 'react-icons/ri';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { GiSatelliteCommunication } from 'react-icons/gi';
import { LiaThinkPeaks } from 'react-icons/lia';

const Skill = () => {

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
    return (
        <div className='flex gap-5 lg:mt-5' >
            <motion.div
                {...motionConfig1}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative cursor-pointer overflow-hidden group bg-linear-to-r/srgb from-[#000000] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300 rounded-xl w-full">
                <div className='justify-items-start p-7'>
                    <div className='flex items-center gap-2'>
                        <FaSkiing className='text-lg'></FaSkiing>
                        <h1 className='text-xl'>Skills</h1>
                    </div>
                    {/* font-end */}
                    <div className='mt-2 flex gap-2 flex-wrap'>
                        <div className='bg-orange-600 flex items-center p-2 gap-1'>
                            <FaHtml5 ></FaHtml5>
                            <h1 className='text-sm'>HTML5</h1>
                        </div>
                        <div className='bg-blue-600 flex items-center p-2 gap-1'>
                            <FaCss3></FaCss3>
                            <h1 className='text-sm'>CSS3</h1>
                        </div>
                        <div className='bg-blue-800 flex items-center p-2 gap-1'>
                            <FaReact></FaReact>
                            <h1 className='text-sm'>React</h1>
                        </div>
                        <div className='bg-red-800 flex items-center p-2 gap-1'>
                            <SiReactrouter></SiReactrouter>
                            <h1 className='text-sm'>React Router</h1>
                        </div>
                        <div className='bg-gray-600 flex items-center p-2 gap-1'>
                            <SiNextdotjs></SiNextdotjs>
                            <h1 className='text-sm'>Next JS</h1>
                        </div>
                        <div className='bg-blue-900 flex items-center p-2 gap-1'>
                            <SiAxios></SiAxios>
                            <h1 className='text-sm'>Axios</h1>
                        </div>
                        <div className='bg-yellow-600 flex items-center p-2 gap-1'>
                            <SiJavascript></SiJavascript>
                            <h1 className='text-sm'>Java Script</h1>
                        </div>
                        <div className='bg-yellow-700 flex items-center p-2 gap-1'>
                            <RiFirebaseFill></RiFirebaseFill>
                            <h1 className='text-sm'>Firebase</h1>
                        </div>
                    </div>
                    {/* back-end */}
                    <div className='mt-2 flex flex-wrap gap-2'>
                        <div className='bg-green-600 flex items-center p-2 gap-1'>
                            <FaNodeJs></FaNodeJs>
                            <h1 className='text-sm'>Node JS</h1>
                        </div>
                        <div className='bg-gray-600 flex items-center p-2 gap-1'>
                            <FaNodeJs></FaNodeJs>
                            <h1 className='text-sm'>Express JS</h1>
                        </div>
                        <div className='bg-green-800 flex items-center p-2 gap-1'>
                            <SiMongodb></SiMongodb>
                            <h1 className='text-sm'>MongoDB</h1>
                        </div>
                        <div className='bg-gray-800 flex items-center p-2 gap-1'>
                            <SiReactrouter></SiReactrouter>
                            <h1 className='text-sm'>JWT</h1>
                        </div>

                    </div>
                    {/* tools */}
                    <div className='mt-2 flex flex-wrap gap-2'>
                        <div className='bg-gray-800 flex items-center p-2 gap-1'>
                            <FaGitSquare></FaGitSquare>
                            <h1 className='text-sm'>Git</h1>
                        </div>
                        <div className='bg-gray-800 flex items-center p-2 gap-1'>
                            <FaGithub></FaGithub>
                            <h1 className='text-sm'>GitHub</h1>
                        </div>
                        <div className='bg-black flex items-center p-2 gap-1'>
                            <SiVercel></SiVercel>
                            <h1 className='text-sm'>Vercel</h1>
                        </div>
                        <div className='bg-red-800 flex items-center p-2 gap-1'>
                            <SiNpm></SiNpm>
                            <h1 className='text-sm'>NPM</h1>
                        </div>
                        <div className='bg-yellow-600 flex items-center p-2 gap-1'>
                            <TbBrandFramerMotion></TbBrandFramerMotion>
                            <h1 className='text-sm'>Framer Motion</h1>
                        </div>
                    </div>
                    {/* soft skill */}
                    <div className='mt-2 flex flex-wrap gap-2'>
                        <div className='bg-pink-800 flex items-center p-2 gap-1'>
                            <FaTeamspeak></FaTeamspeak>
                            <h1 className='text-sm'>Team Collaboration</h1>
                        </div>
                        <div className='bg-green-800 flex items-center p-2 gap-1'>
                            <GiSatelliteCommunication></GiSatelliteCommunication>
                            <h1 className='text-sm'>Communication,</h1>
                        </div>
                        <div className='bg-red-800 flex items-center p-2 gap-1'>
                            <LiaThinkPeaks></LiaThinkPeaks>
                            <h1 className='text-sm'>Critical thinking</h1>
                        </div>
                    </div>
                </div>
                <span className="absolute right-0 w-30 h-full top-0 transition-all duration-2000 transform translate-x-28 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-200 ease"></span>
            </motion.div>
        </div>
    );
};

export default Skill;