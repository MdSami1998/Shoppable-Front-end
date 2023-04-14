import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Navber = () => {
    const [user] = useAuthState(auth);

    const menuItems = <>
        <li><Link className='btn btn-ghost' to='/'>Home</Link></li>
        <li><Link className='btn btn-ghost' to="/about">About</Link></li>
        <li><Link className='btn btn-ghost' to="/contact">Contact</Link></li>
        {
            user ?
                <li><button onClick={() => signOut(auth)} className='btn btn-ghost'>Sign out</button></li>
                :
                <li><Link className='btn btn-ghost' to="/signin">Sign In</Link></li>
        }
    </>
    return (
        <div className='text-white flex justify-between py-5 sticky top-0 z-10 bg-base-100'>
            <div className="navbar">
                <div className="navbar-start w-full">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>

                    <Link to='/' className='cursor-pointer'>
                        <div className='flex justify-center md:justify-start w-full'>
                            <h1 className='font-bold text-xl -ml-10 md:ml-0 md:text-2xl lg:text-3xl'>SHOPP<span className='text-neutral'>ABLE</span></h1>
                        </div>
                    </Link>

                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;