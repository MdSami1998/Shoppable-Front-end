import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../../shared/Loader/Loader';
import { UserCircleIcon} from '@heroicons/react/solid';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow } from 'swiper';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () =>
        fetch('http://localhost:5000/reviews').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loader></Loader>
    }

    const star = (length) => {
        let x = '';
        for (let i = 1; i <= length; i++) {
            x += '★';
        }
        return x;
    }
    return (
        <div className='p-10'>
            <h1 className='text-2xl md:text-4xl text-white mb-10 mt-16 md:mt-0 tracking-wider font-semibold'>What Our Customer Say!</h1>
            <div className=' my-10 px-2 md:px-20'>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}

                    modules={[EffectCoverflow]}
                    className="mySwiper"
                >

                    {
                        reviews?.map(review =>
                            <div key={review._id} >
                                <SwiperSlide key={review._id} className="card max-w-sm glass">
                                    <div className="card-body px-1">
                                        <UserCircleIcon className='w-12 mx-auto'></UserCircleIcon>
                                        <h2 className="text-xl font-semibold text-accent text-center">Rating: {review.rating}.00 <span className='text-sm text-secondary'>{star(review.rating)}</span></h2>
                                        <p className='text-xl text-white'>{review.review}</p>
                                    </div>
                                </SwiperSlide>
                            </div>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;