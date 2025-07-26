import React, { useEffect, useState } from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaLocationDot, FaLocationPin, FaTelegram } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { motion } from "motion/react"// eslint-disable-line no-unused-vars

const Contact = () => {

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
        <div className='lg:pb-10'>
            <motion.section
                {...motionConfig1}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.3 }}

                className="relative cursor-pointer overflow-hidden group bg-linear-to-r/srgb from-[#000000] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300 rounded-xl w-full">
                <div className="container p-5 md:p-12  mx-auto">
                    <div>
                        <p className="font-medium">Contact us and</p>

                        <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Get in touch</h1>

                        <p className="mt-3 text-gray-500 dark:text-gray-400">Always here to chat.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-2 md:gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                        <div className='flex flex-row md:flex-col gap-2 items-center md:items-start'>
                            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800 text-xl">
                                <MdEmail></MdEmail>
                            </span>
                            <p className="mt-2 text-blue-500">muksitul44@gmail.com</p>
                        </div>

                        <div className='flex flex-row md:flex-col gap-2 items-center md:items-start'>
                            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800 text-xl">
                                <FaLocationDot></FaLocationDot>
                            </span>
                            <p className="mt-2 text-blue-500">Dhaka, Bangladesh</p>
                        </div>

                        <div className='flex flex-row md:flex-col gap-2 items-center md:items-start'>
                            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800 text-xl">
                                <BsFillTelephoneFill></BsFillTelephoneFill>
                            </span>
                            <p className="mt-2 text-blue-500">+880 1617182171 </p>
                        </div>
                    </div>
                </div>
                <span className="absolute right-0 w-30 h-full top-0 transition-all duration-2000 transform translate-x-28 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-200 ease"></span>

            </motion.section>
            {/* form */}
            <motion.section
                       {...motionConfig1}
                transition={{ duration: 1, delay: .2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative cursor-pointer overflow-hidden group bg-linear-to-r/srgb from-[#000000] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300 rounded-xl w-full p-5 md:p-10 mt-5">
                <form action="">
                    <div className='flex flex-col md:flex-row gap-3'>
                        <input type="text" name='Name' placeholder='Name' className='border border-gray-600 p-4 rounded-lg w-full' required />
                        <input type="email" name='email' placeholder='Email' className='border border-gray-600 p-4 rounded-lg w-full' required />
                    </div>
                    <input type="text" name='Name' placeholder='Your Project Idea' className='border border-gray-600 p-4 rounded-lg w-full mt-3' required />
                    <textarea name="text" id="" placeholder='Write your message' className='border border-gray-600 p-4 rounded-lg w-full mt-3 h-50' required></textarea>
                    <input type="submit" name='Name' placeholder='Your Project Idea' className='border border-gray-600 p-4 rounded-lg w-full mt-3 cursor-pointer hover:bg-white hover:text-black duration-500' required />
                </form>
                <span className="absolute right-0 w-30 h-full top-0 transition-all duration-2000 transform translate-x-28 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-200 ease"></span>

            </motion.section>

        </div>
    );
};

export default Contact;