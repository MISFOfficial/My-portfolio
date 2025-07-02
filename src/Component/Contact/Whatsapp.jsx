import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Whatsapp = () => {
    return (
        <div>
            <a href="https://wa.me/8801717966864"
            target="_blank" 
            className='border w-fit px-8 py-1.5 mx-auto flex items-center gap-1 cursor-pointer rounded-md'>
                <p>Connect Now</p>
                <div className='text-green-400 text-xl animate-bounce'><FaWhatsapp></FaWhatsapp></div>
            </a>
        </div>
    );
};

export default Whatsapp;