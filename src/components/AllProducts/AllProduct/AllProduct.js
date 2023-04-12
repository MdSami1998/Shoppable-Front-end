import React from 'react';

const AllProduct = ({ product }) => {
    const { thumbnail, title, description, price, stock } = product;
    return (
        <div className="card w-full shadow-2xl text-white" style={{ backgroundColor: "#253560" }}>
            <figure className="px-10 pt-10">
                <img src={thumbnail} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <h2>{price}$</h2>
                <p>{description}</p>

                <div className='flex justify-between w-full'>
                    <h2>{price}$</h2>
                    <h2>{stock}/pcs</h2>
                </div>
                <div className="card-actions">
                    <button className='buyNowBtn flex items-center'>
                        <span>Buy Now</span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg></button>
                </div>
            </div>
        </div>


    );
};
export default AllProduct;