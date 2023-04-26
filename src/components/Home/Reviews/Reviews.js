import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../../shared/Loader/Loader';
import Review from './Review/Review';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () =>
        fetch('http://localhost:5000/reviews').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='p-10'>
            <h1 className='text-2xl md:text-4xl text-white mb-10 mt-16 md:mt-0 tracking-wider font-semibold'>What Our Customer Say!</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-20 my-10 px-2 md:px-20'>
                {
                    reviews?.map(review => <Review key={review._id} userReview={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;