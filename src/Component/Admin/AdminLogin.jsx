import React, { use } from 'react';
import { AuthContext } from '../../Auth/AuthContext';
import { Link, useNavigate } from 'react-router';

const AdminLogin = () => {

    const { signIn } = use(AuthContext)
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        signIn(email, password)
            .then(() => {
                navigate('/deshboard')
            })
            .catch(() => {
                // console.log(e)
                alert()
            })
    }

    return (
        <div className=' h-screen flex flex-col items-center justify-center '>
            <div className='w-[90%] md:w-[60%] lg:w-[30%]'><h1 className='text-2xl'>Only Admin can access,  <Link to='/' className='underline text-blue-500'>Leave</Link></h1></div>
            <form onSubmit={handleLogin} action="" className='flex flex-col w-[90%] md:w-[60%] lg:w-[30%] gap-5 mt-10'>
                <input name='email' type="email" placeholder='name' className='border p-3 rounded-xl' />
                <input name='password' type="password" placeholder='name' className='border p-3 rounded-xl' />
                <input type="submit" placeholder='name' className='border p-3 rounded-xl mt-5 hover:bg-white hover:text-black duration-300 cursor-pointer' />
            </form>
        </div>
    );
};

export default AdminLogin;