import React, { useEffect, useState } from 'react';
import { motion } from "motion/react" // eslint-disable-line no-unused-vars
import Skill from './Skill';

const Resume = () => {
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
        <div className='flex flex-col gap-2'>
            {/* top portion */}
            <motion.div
                {...motionConfig1}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative cursor-pointer overflow-hidden group bg-linear-to-r/srgb from-[#000000] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300 rounded-xl w-full">

                <div className='justify-items-start p-7'>
                    <h1 className='text-xl'>Education</h1>
                    <div className='divider w-full'></div>
                    <div className='flex items-center justify-between w-full'>
                        <p>2021-2024</p>
                        <div className='text-end'>
                            <p className='text-lg text-gray-300'>Bachelor degree in CSE</p>
                            <p className='text-gray-400'>Daffodil International University</p>
                        </div>
                    </div>
                    <div className='w-full divider'></div>
                    <div className='flex items-center justify-between w-full'>
                        <p>2017-2019</p>
                        <div className='text-end'>
                            <p className='text-lg text-gray-300'>HSC in Science</p>
                            <p className='text-gray-400'>Gurudayal Govt. Collage</p>
                        </div>
                    </div>
                </div>
                <span className="absolute right-0 w-30 h-full top-0 transition-all duration-2000 transform translate-x-28 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-200 ease"></span>
            </motion.div>

            <Skill></Skill>
        </div>
    );
};

export default Resume;