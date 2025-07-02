import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { motion } from "motion/react"// eslint-disable-line no-unused-vars
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FiExternalLink } from 'react-icons/fi';
import Footer from '../Footer/Footer';


const SingleProject = () => {

    const data = useLoaderData()

    // console.log(data)

    return (
        <div className='p-2 md:p-5 lg::p-10'>
            <div className='w-full flex justify-end mb-5'>
                <Link to='/projects'><button className='btn bg-green-600 border-none text-[12px] md:text-[16px]'>Back</button></Link>
            </div>
            <div className='flex flex-col lg:flex-row boder gap-5'>
                <div className='relative h-50 md:h-100 lg:h-130 lg:w-220 rounded-2xl'>
                    <Swiper className='h-full rounded-2xl'
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 2500, // 2.5 seconds
                            disableOnInteraction: false,
                        }}
                        loop={true}
                    >
                        {data.image.map((imgUrl, idx) => (
                            <SwiperSlide key={idx}>
                                <img
                                    src={imgUrl}
                                    className=' h-full w-full rounded-lg object-cover'
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='absolute top-0 bg-[#0000004e] duration-500 hover:bg-[#000000ab] z-1 h-full w-full rounded-2xl flex justify-center items-center'>
                        <a href={data.live_link} className='underline font-bold border-[3px] px-4 md:px-8 py-1 flex items-center gap-1 text-[15px] md:text-[20px] transform transition-transform hover:scale-150 duration-500' target='_blank'>
                            <div className=''><FiExternalLink></FiExternalLink></div>
                            <span>Live</span>
                        </a>
                    </div>
                </div>
                <div className='flex-1 flex flex-col gap-5'>
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.3 }}

                        class="relative overflow-hidden group bg-linear-to-r/srgb from-[#000000] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300 rounded-xl w-full">

                        <div className='justify-items-start p-3 md:p-7'>
                            <h1 className='text-sm md:text-xl text-green-600 font-bold'>{data.project}</h1>
                            <div className='divider w-full m-0'></div>
                            <p className='w-full text-[12px] md:text-[16px] text-gray-300'>{data.overView}</p>
                        </div>
                        <span class="absolute right-0 w-30 h-full top-0 transition-all duration-2000 transform translate-x-28 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-230 ease"></span>
                    </motion.div>
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: .2 }}
                        viewport={{ once: true, amount: 0.3 }}

                        class="relative overflow-hidden group bg-linear-to-r/srgb from-[#000000] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300 rounded-xl w-full">

                        <div className='justify-items-start p-3 md:p-7'>
                            <h1 className='text-sm md:text-xl text-green-600 font-bold'>Key Features</h1>
                            <div className='divider w-full m-0'></div>
                            <p className='w-full text-[12px] md:text-[16px] text-gray-300'>{data.key_features}</p>
                        </div>
                        <span class="absolute right-0 w-30 h-full top-0 transition-all duration-2000 transform translate-x-28 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-230 ease"></span>
                    </motion.div>
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: .4 }}
                        viewport={{ once: true, amount: 0.3 }}

                        class="relative overflow-hidden group bg-linear-to-r/srgb from-[#000000] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300 rounded-xl w-full">

                        <div className='justify-items-start p-3 md:p-7'>
                            <h1 className='text-sm md:text-xl text-green-600 font-bold'>Tools</h1>
                            <div className='divider w-full m-0'></div>
                            <p className='w-full text-[12px] md:text-[16px] text-gray-300'>{data.tools}</p>
                        </div>
                        <span class="absolute right-0 w-30 h-full top-0 transition-all duration-2000 transform translate-x-28 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-230 ease"></span>
                    </motion.div>
                </div>

            </div>
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: .6 }}
                viewport={{ once: true, amount: 0.3 }}

                class="mt-5 relative overflow-hidden group bg-linear-to-r/srgb from-[#000000] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300 rounded-xl w-full">

                <div className='justify-items-start p-3 md:p-7'>
                    <h1 className='text-sm md:text-xl text-green-600 font-bold'>Dependencies</h1>
                    <div className='divider w-full m-0'></div>
                    <p className='w-full text-[12px] md:text-[16px] text-gray-300'>{data.dependencies}</p>
                </div>
                <span class="absolute right-0 w-30 h-full top-0 transition-all duration-1500 transform translate-x-28 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-460 ease"></span>
            </motion.div>

            <div className='flex flex-col md:flex-row gap-5'>
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: .8 }}
                    viewport={{ once: true, amount: 0.3 }}

                    class="mt-5 relative overflow-hidden group bg-linear-to-r/srgb from-[#000000] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300 rounded-xl w-full">

                    <div className='justify-items-start p-3 md:p-7'>
                        <h1 className='text-sm md:text-xl text-green-600 font-bold'>Fontend Repository</h1>
                        <div className='divider w-full m-0'></div>
                        <a target='_blank' href={data.clint_repo} className='w-full text-[12px] md:text-[16px]  underline text-blue-500'>{data.clint_repo}</a>
                    </div>
                    <span class="absolute right-0 w-30 h-full top-0 transition-all duration-1500 transform translate-x-28 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-460 ease"></span>
                </motion.div>
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    viewport={{ once: true, amount: 0.3 }}

                    class="md:mt-5 relative overflow-hidden group bg-linear-to-r/srgb from-[#000000] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300 rounded-xl w-full">

                    <div className='justify-items-start p-3 md:p-7'>
                        <h1 className='text-sm md:text-xl text-green-600 font-bold'>Backend Repository</h1>
                        <div className='divider w-full m-0'></div>
                        <a target='_blank' href={data.server_repo} className='w-full text-[12px] md:text-[16px]  underline text-blue-500'>{data.server_repo}</a>
                    </div>
                    <span class="absolute right-0 w-30 h-full top-0 transition-all duration-1500 transform translate-x-28 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-460 ease"></span>
                </motion.div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default SingleProject;