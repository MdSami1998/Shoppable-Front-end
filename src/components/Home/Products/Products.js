import React from 'react';
import Product from './Product/Product';
import '../Products/Products.css'
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loader from '../../shared/Loader/Loader';

const Products = () => {

    const { data: products, isLoading } = useQuery('products', () =>
        fetch(`http://localhost:5000/products`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <h1 className='text-4xl md:text-5xl text-white mb-10 mt-16 md:mt-0 tracking-widest font-semibold'>Our Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 px-5'>
                {
                    products?.slice(0, 4).map(product => <Product product={product} key={product._id}></Product>)
                }
            </div>

            <Link to="/products" className='grid place-content-center my-11 font-extrabold'>
                <button className="showAllProductsBtn text-white text">
                    See more
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15px" width="15px" className="icon">
                        <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4" stroke="#FF9900" d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"></path>
                    </svg>
                </button>
            </Link>
        </div>
    );
};

export default Products;