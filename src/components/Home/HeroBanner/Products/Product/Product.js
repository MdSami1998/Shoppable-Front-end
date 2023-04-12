import React from 'react';
import '../Product/Product.css'

const Product = ({ product }) => {
    const { thumbnail, title, description, price, stock } = product;
    return (
        <div className="card w-full bg-base-100 shadow-xl text-white border border-red-500">
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
                    <button className='productCardBtn'>Buy Now</button>
                </div>
            </div>
        </div>


    );
};

export default Product;