import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loader from '../../shared/Loader/Loader';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L3dJFGGa1T2l3mS4u8gkaftjs8ziTZJLomiJxbPKqNhQqGIOMRojyabIzFRNs8wLlqBgH2UhLyADRkqfe2Dq8Mt00CvNUQNDd');
const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`
    const { data: order, isLoading } = useQuery(['order', id], () =>
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    )
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='p-2 md:p-10' style={{ backgroundColor: "#253560" }} >
            <div className="card w-full md:w-4/6 mx-auto shadow-2xl my-12">
                <div className="card-body text-justify bg-secondary rounded-xl">
                    <h2 className="font-semibold text-2xl text-white">Pay for <span className='text-orangerrr'>{order.productName}</span></h2>
                    <p className='text-lg text-white'>Your order wiil be shipped soon!</p>
                    <p className='text-lg text-white'>Please Pay <span className='text-orangerrr font-semibold text-2xl'>${order.orderPrice}</span></p>
                </div>
            </div>
            <div className="card flex-shrink-0 mx-auto w-full md:w-4/6 shadow-2xl bg-secondary">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;