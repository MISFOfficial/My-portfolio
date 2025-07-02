import React from 'react';

const Loader = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <img className='w-10 md:w-25 lg:w-40 animate-ping' src="/muksitul-logo.png" alt="" />
        </div>
    );
};

export default Loader;