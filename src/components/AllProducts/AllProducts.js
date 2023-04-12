import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllProduct from './AllProduct/AllProduct';

const AllProducts = () => {
        const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 my-5'>
                {
                    products.map(product => <AllProduct product={product}></AllProduct>)
                }
            </div>
        </div>
    );
};

export default AllProducts;