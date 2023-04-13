import React, { useEffect, useState } from 'react';
import AllProduct from './AllProduct/AllProduct';
import { useQuery } from 'react-query';

const AllProducts = () => {
    //     const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     fetch("https://dummyjson.com/products")
    //         .then(res => res.json())
    //         .then(data => setProducts(data.products))
    // }, [])
    const { data: products, isLoading } = useQuery('products', () =>
        fetch(`https://dummyjson.com/products`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return 'loading'
    }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 my-5'>
                {
                    products?.products?.map(product => <AllProduct product={product}></AllProduct>)
                }
            </div>
        </div>
    );
};

export default AllProducts;