import React from 'react';
import "./Home.css"
import hero from '../../Assets/BAnner.jfif'

const Home = () => {
    return (
        <div>
            <div>

            </div>
            <div>
                <div className="hero md:min-h-screen text-white">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img className="w-full lg:max-w-lg rounded-lg shadow-2xl" src={hero} alt="" />
                        <div className='text-left'>
                            <h1 className="text-3xl md:text-5xl font-bold text-neutral tracking-widest">Shoppable!</h1>

                            <p className="py-6 text-lg md:text-2xl md:mt-8">The One-Stop Grocery Store for All Your Needs. Shop anytime, anywhere and enjoy the ease of online grocery shopping with us. Shop Fresh, Shop Fast, Shop Conveniently</p>

                            {/* <button className=" flex items-center btn-sm md:btn-md rounded-xl btn-accent text-white">Get Started</button> */}

                            <button class="learn-more">
                                <span class="circle" aria-hidden="true">
                                    <span class="icon arrow"></span>
                                </span>
                                <span class="button-text">Learn More</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;