import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllProduct = ({ product }) => {
    const { _id, image, name, price, stock } = product;

    const navigate = useNavigate()

    const handleProductDetails = (id) => {
        navigate(`/product-details/${id}`)
    }

    return (
        <div className="card w-full shadow-2xl text-white" style={{ backgroundColor: "#253560" }}>
            <figure className="px-10 pt-10">
                <img src={image} alt={name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <h2>Price: <span className='text-xl'>{price}$</span></h2>
                <h2>Stock: <span className='text-xl'>{stock}</span></h2>

                <div className="card-actions mt-2">
                    <button onClick={() => handleProductDetails(_id)} className='buyNowBtn flex items-center'>
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