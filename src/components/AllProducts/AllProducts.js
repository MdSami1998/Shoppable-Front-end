import React from 'react';
import AllProduct from './AllProduct/AllProduct';
import { useQuery } from 'react-query';
import Loader from '../shared/Loader/Loader';

const AllProducts = () => {

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
            <h1 className='text-5xl text-white mb-10 tracking-widest font-semibold'>Our Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 my-5 px-5'>
                {
                    products?.map(product => <AllProduct product={product} key={product._id}></AllProduct>)
                }
            </div>
        </div>
    );
};

export default AllProducts;