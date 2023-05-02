import React from 'react';
import '../Product/Product.css'
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, image, name, price } = product;

    const navigate = useNavigate();
    const handleProductDetails = (id) => {
        navigate(`/order/${id}`)
    }

    return (
        <div className="card w-full shadow-2xl text-white rounded-md" style={{ backgroundColor: "#253560" }}>
            <figure className="px-8 pt-8">
                <img src={image} alt={name} className="rounded-sm" />
            </figure>
            <div className="card-body">
                <p className="text-lg text-justify">{name}</p>
                <p className='text-lg text-justify -mt-1'>$ {price}</p>

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

export default Product;