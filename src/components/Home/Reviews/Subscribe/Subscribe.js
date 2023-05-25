import React from 'react';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div class="wrapper w-10/12 mx-auto text-center my-8">
            <div class="subscribeHeader">
                <h1 className='text-4xl md:text-5xl text-secondary  tracking-widest font-semibold'>Subscribe</h1>
                <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
            </div>
            <div class="subscribeFooter">
                <form action="">
                    <input type="email" placeholder="Enter your email here" required/>
                </form>
                <button class="btn-subscribe">submit</button>
            </div>
        </div>
    );
};

export default Subscribe;