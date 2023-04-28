import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ order }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transectionID, setTransectionID] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    const { _id, orderPrice, userName, email } = order;

    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ orderPrice }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            });
    }, [orderPrice]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setSuccess('');

        //confirm card payment

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: email,
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError.message);
            setProcessing(false);
        }
        else {
            setCardError('');
            setTransectionID(paymentIntent.id)
            setSuccess('Congrates!Your payment is completed');

            // store payment on database 
            const payment = {
                order: _id,
                transectionID: paymentIntent.id
            }
            fetch(`http://localhost:5000/order/${_id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment),
            })
                .then(res => res.json())
                .then(data => {
                    setProcessing(false);
                })
        }
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#ffffff',
                                '::placeholder': {
                                    color: '#ffffff',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='signInBtn mt-12' type="submit" disabled={!stripe || !clientSecret}>
                    Pay Now
                </button>
            </form>
            {cardError && <p className='text-red-500'>{cardError}</p>}

            {success && <div className='text-white'>
                <p>{success}</p>
                <p>Transection ID: <span className='text-white font-semibold'>{transectionID}</span></p>
            </div>}
        </div>
    );
};

export default CheckoutForm;