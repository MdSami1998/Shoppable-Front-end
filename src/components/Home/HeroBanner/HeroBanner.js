import React from 'react';
import './HeroBanner.css'
import hero from '../../../Assets/BAnner.jfif'

const Banner = () => {
    return (
        <div>
            <div>
                <div className="hero md:min-h-screen text-white">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img className="w-full lg:max-w-lg rounded-lg shadow-2xl" src={hero} alt="" />
                        <div className='text-left'>
                        <h1 className="text-3xl md:text-5xl font-bold text-neutral tracking-widest">Shoppable!</h1>

                            <p className="py-6 text-lg md:text-2xl md:mt-8">The One-Stop Grocery Store for All Your Needs. Shop anytime, anywhere and enjoy the ease of online grocery shopping with us. Shop Fresh, Shop Fast, Shop Conveniently</p>

                            <button className="learn-more">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">Learn More</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    );
};

export default Banner;