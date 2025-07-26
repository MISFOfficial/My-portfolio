import React, { use } from 'react';
import Navigation from '../Component/Navigation/Navigation';
import Profile from '../Component/Profile/Profile';
import { Outlet } from 'react-router';
import Header from '../Component/Navigation/Header';
import Loader from '../Component/Loader/Loader';
import { AuthContext } from '../Auth/AuthContext';
import Footer from '../Component/Footer/Footer';
import FooterNav from '../Component/Navigation/FooterNav';

const Home = () => {

    const { loader } = use(AuthContext)

    if (loader) {
        return <Loader></Loader>
    }

    return (
        <div className='max-w-[1280px] mx-auto'>
            <div className='sticky top-0 z-[1000] '>
                <Header></Header>
            </div>
            <div className='hidden lg:flex justify-center'><Footer></Footer></div>
            <div className='flex gap-5 '>
                <div className='hidden lg:flex gap-10 sticky top-22 z-[999] h-fit'>
                    <Navigation></Navigation>
                    <Profile></Profile>
                </div>
                {/* <div className='hidden lg:flex lg:flex-1 h-fit'></div> */}
                <div className='flex-1 px-2 md:px-5 lg:px-0  mt-5 lg:mt-0'>
                    <Outlet></Outlet>
                </div>
            </div>
            <div className='lg:hidden flex justify-center mb-20 lg:mb-0'><Footer></Footer></div>
            <div className='lg:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-[999]'><FooterNav></FooterNav></div>
        </div>
    );
};

export default Home;