import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';

const AddReview = () => {
    const [ratingError, setRatingError] = useState('');

    const ratingRef = useRef();
    const handleRatingError = () => {
        const ratingInput = ratingRef.current.value;
        let ratingErrMsg;
        if (ratingInput < 0 || ratingInput > 5) {
            ratingErrMsg = <p className='text-red-500'>
                Rating should be between 0-5
            </p>
        }
        setRatingError(ratingErrMsg);
    }

    const handleAddReview = (e) => {
        e.preventDefault();
        const rating = ratingRef.current.value;
        const review = e.target.userReview.value;
        const reviewerName = e.target.reviewerName.value;


        const userReview = {
            rating, review,reviewerName
        }

        if (rating < 0 || rating > 5) {
            return ratingError;
        }

        else {
            fetch('http://localhost:5000/reviews', {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(userReview)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.acknowledged) {
                        toast.success('Review Added!')
                    }
                })
            e.target.reset();
        }
    }
    return (
        <div className='my-16'>
            <h1 className='text-4xl md:text-5xl text-white mb-10 mt-16 md:mt-0 tracking-widest font-semibold'>Share Your Opinion</h1>
            <form onSubmit={handleAddReview}>
                <div className="card-body p-3 md:p-8 w-full md:w-3/6 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-orangerrr text-lg">Name</span>
                        </label>
                        <input type="text" placeholder='your name' className="input input-bordered" name='reviewerName' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-orangerrr text-lg">Rating</span>
                        </label>
                        <input ref={ratingRef} onChange={handleRatingError} type="number" placeholder='Rating(1-5)' className="input input-bordered" name='rating' required />
                        {ratingError}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-orangerrr text-lg">Review</span>
                        </label>
                        <textarea className='bg-transparent border border-gray-700 rounded-xl p-3' name="userReview" placeholder='your review' cols="30" rows="4" required></textarea>
                    </div>
                    <div className="card-actions justify-center w-full mt-5">
                        <button type='submit' className='signInBtn'>Share
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddReview;