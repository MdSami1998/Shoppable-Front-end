import React, { useState } from 'react';
import AllProduct from './AllProduct/AllProduct';
import { useQuery } from 'react-query';
import Loader from '../shared/Loader/Loader';

const AllProducts = () => {

    const [searchText, setSearchText] = useState('')

    const { data: products, isLoading } = useQuery('products', () =>
        fetch(`http://localhost:5000/products`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loader></Loader>
    }

    const handleInput = e => {
        setSearchText(e.target.value)
    }


    return (
        <div>
            <h1 className='text-5xl text-white mb-10 tracking-widest font-semibold'>Our Products</h1>

            <div>
                <div className='flex justify-end'>
                    <input onChange={handleInput} placeholder="🍳Search Products..." className="input input-bordered input-info w-full max-w-xs" name="text" type="text" autoComplete='off' />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-5 mt-16 px-5'>
                {
                    products?.filter((item) => {
                        if (searchText === "") {
                            return item;
                        }
                        else if (item.name.toLowerCase().includes(searchText.toLowerCase())) {
                            return item;
                        }
                    }).map(product => <AllProduct product={product} key={product._id}></AllProduct>)
                }
            </div>
        </div>
    );
};

export default AllProducts;