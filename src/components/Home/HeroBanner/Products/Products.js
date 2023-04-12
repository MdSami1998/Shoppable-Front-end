import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12'>
                {
                    products.slice(0, 4).map(product => <Product product={product}></Product>)
                }
            </div>

            <button class="btn">
                See more
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15px" width="15px" class="icon">
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" stroke="#292D32" d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"></path>
                </svg>
            </button>
        </div>
    );
};

export default Products;