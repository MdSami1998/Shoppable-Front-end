import React from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='mb-44'>
            <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster mx-auto mt-24 mb-5">
                <div className="wheel"></div>
                <div className="hamster">
                    <div className="hamster__body">
                        <div className="hamster__head">
                            <div className="hamster__ear"></div>
                            <div className="hamster__eye"></div>
                            <div className="hamster__nose"></div>
                        </div>
                        <div className="hamster__limb hamster__limb--fr"></div>
                        <div className="hamster__limb hamster__limb--fl"></div>
                        <div className="hamster__limb hamster__limb--br"></div>
                        <div className="hamster__limb hamster__limb--bl"></div>
                        <div className="hamster__tail"></div>
                    </div>
                </div>
                <div className="spoke"></div>
            </div>
            <div className='text-2xl text-white font-bold tracking-widest mb-8'>
                <p>Oopps! Page Not Found.</p>
            </div>
            <Link to='/' className='text-blue-500 text-lg '>Go to home</Link>
        </div>
    );
};

export default NotFound;