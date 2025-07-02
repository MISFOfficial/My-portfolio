import React, { useState } from 'react';
import { motion } from "motion/react"// eslint-disable-line no-unused-vars
import { Link, useLoaderData } from 'react-router';
import { FaArrowRight } from 'react-icons/fa';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';



const Projects = () => {

    const data = useLoaderData()
    const [projectLength] = useState(data.length)
    
    // console.log(data)
    // console.log(data.length)

    return (
        <div>
            <h1 className='text-4xl font-semibold'>My Showcase</h1>
            <div className='divider mt-0'></div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-3'>
                {data.map((data, index) =>
                    <motion.div
                        key={index}
                        initial={{ y: -50, opacity: 0 }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: { duration: 1, delay: .4 }
                        }}
                        className="relative overflow-hidden group bg-linear-to-r/srgb from-[#000000] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300 rounded-xl w-full">

                        <div className=' justify-items-start p-7'>
                            <h1>Project {projectLength - index}</h1>
                            <div className='divider w-full mt-0'></div>
                            <div className='w-full relative'>
                                <div className='w-full h-50 rounded-lg flex justify-center items-center relative'>
                                    <img
                                        src={data.image[0]}
                                        className=' h-full w-full rounded-lg object-cover'
                                    />
                                    {/* <Swiper
                                        autoplay={{
                                            delay: 2500, // 2.5 seconds
                                            disableOnInteraction: false,
                                        }}
                                        modules={[Navigation, Pagination, Autoplay]}
                                    >
                                        {data.image.map((imgUrl, idx) => (
                                            <SwiperSlide key={idx}>
                                                <img
                                                    src={imgUrl}
                                                    alt={`Project image ${idx + 1}`}
                                                    className=' h-full w-full rounded-lg object-cover'
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper> */}
                                    <div className='bg-[#0000007c] w-full h-full absolute'></div>
                                </div>

                                <div>
                                    <Link to={`/projects/${data._id}`}><div className='bg-[#464a4a] w-fit p-3 hover:bg-white hover:text-black duration-500 rounded-3xl absolute top-3 left-3 cursor-pointer'><FaArrowRight></FaArrowRight></div>
                                    </Link>

                                    <Link to={`/projects/${data._id}`}>
                                        <motion.span
                                            className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white cursor-pointer  w-full justify-items-center"
                                            initial="rest"
                                            whileHover="hover"
                                            animate="rest"
                                        >
                                            <p className="relative ">
                                                {data.project}
                                                {/* Underline element inside <p> */}
                                                <motion.span
                                                    className="absolute left-0 -bottom-1 h-[2px] bg-white"
                                                    variants={{
                                                        rest: { width: 0 },
                                                        hover: { width: "100%" },
                                                    }}
                                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                                />
                                            </p>
                                        </motion.span>
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <span className="absolute right-0 w-30 h-full top-0 transition-all duration-2000 transform translate-x-28 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-100 ease"></span>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Projects;