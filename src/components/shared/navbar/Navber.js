import React from 'react';
import Logo from '../../../Assets/BAnner.jfif'
import { Link } from 'react-router-dom';

const Navber = () => {
    const menuItems = <>
        <li><Link className='btn btn-ghost' to='/'>Home</Link></li>
        <li><Link className='btn btn-ghost' to="/about">About</Link></li>
        <li><Link className='btn btn-ghost' to="/contact">Contact</Link></li>
    </>
    return (
        <div className='text-white flex justify-between py-5'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>

                    <div className='flex justify-between items-center'>
                        <img className='w-10' src={Logo} alt="" />
                        <h1>Shoppable</h1>
                    </div>

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