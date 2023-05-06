import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../../shared/Loader/Loader';
import { UserCircleIcon } from '@heroicons/react/solid';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination } from 'swiper';


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
                    style={{
                        "--swiper-pagination-color": "#FFBA08",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "14px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px"
                    }}

                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    pagination={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}

                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper h-56"
                >

                    {
                        reviews?.map(review =>
                            <div key={review._id} >
                                <SwiperSlide key={review._id} className="card max-w-sm bg-gray-70 overflow-y-scroll px-5">
                                    <div className="card-body px-1">
                                        <UserCircleIcon className='w-12 mx-auto'></UserCircleIcon>
                                        <h2 className="text-xl tracking-widest text-white text-center">{review.reviewerName}</h2>
                                        <p className='text-lg text-neutral -mt-2'>{star(review.rating)}</p>
                                        <p className='text-md text-white text-justify'>"{review.review}"</p>
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