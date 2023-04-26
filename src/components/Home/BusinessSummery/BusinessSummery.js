import React from 'react';
import flag from '../../../Assets/icons/flag.png'
import client from '../../../Assets/icons/client.png'
import feedback from '../../../Assets/icons/feedback.png'

const BusinessSummery = () => {
    return (
        <div className='my-10 glass p-5 md:p-14 pt-5 text-white'>
            <div>
                <h1 className='text-white text-3xl md:text-4xl font-semibold mb-8'>Millions People Trust Us</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-20 px-3 md:px-20'>
                <div>
                    <img className='bg-accent w-24 rounded-full mx-auto mb-6' src={flag} alt="" />
                    <p className=' text-3xl'><span className='font-bold'>52+</span>  <br /> Countries</p>
                </div>
                <div>
                    <img className='bg-accent w-24 rounded-full mx-auto mb-6' src={client} alt="" />
                    <p className=' text-3xl'><span className='font-bold'>120+</span>  <br /> Happy Clients</p>
                </div>
                <div id='tools'>
                    <img className='bg-accent w-24 rounded-full mx-auto mb-6' src={feedback} alt="" />
                    <p className=' text-3xl'><span className='font-bold'>200+</span> <br />Feedbacks</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;