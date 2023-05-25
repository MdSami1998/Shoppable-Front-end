import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loader from '../../shared/Loader/Loader';

const ManageProducts = () => {

    const { data: products, isLoading, refetch } = useQuery('products', () =>
        fetch('http://localhost:5000/products').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loader></Loader>
    }

    const handleDeleteProduct = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    refetch();
                })
            toast.success('Product deleted successfully')
        }

    }
    return (
        <div className='my-10'>
            <h1 className='text-3xl font-semibold mb-7 text-white tracking-wider'>Manage Products: {products.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr className='text-white'>
                            <th></th>
                            <th></th>
                            <th className='text-lg'>Product</th>
                            <th className='text-lg'>Price</th>
                            <th className='text-lg'>Stock</th>
                            <th className='text-lg'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <tr key={product._id} className='text-white text-md'>
                                <th>{index + 1}</th>

                                <td><img className='w-20 rounded-full' src={product.image} alt="" /></td>

                                <td className='uppercase'>{product.name}</td>

                                <td>$ {product.price} /{product.unit}</td>

                                <td>{product.stock} {product.unit}</td>

                                <td>
                                    <label onClick={() => handleDeleteProduct(product._id)} htmlFor="my-modal" className='btn btn-sm text-xs bg-transparent text-red-500 hover:bg-red-500 hover:text-secondary'>Delete</label>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;