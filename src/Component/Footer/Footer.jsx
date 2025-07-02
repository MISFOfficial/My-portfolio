import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal footer-center text-base-content py-5">
                <aside>
                    <p className='name-style text-xl'>copyright © {new Date().getFullYear()} - all right reserved by muksitul islam</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;