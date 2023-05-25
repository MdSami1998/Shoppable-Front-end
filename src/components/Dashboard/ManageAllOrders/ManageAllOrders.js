import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loader from '../../shared/Loader/Loader';

const ManageAllOrders = () => {
    const { data: orders, isLoading, refetch } = useQuery('orders', () =>
        fetch('http://localhost:5000/manageorders').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loader></Loader>
    }

    const handleAdminDeleteOrder = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/manageorders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => refetch())
            toast.success('Order deleted successfully')
        }

    }
    const handleShipment = (id) => {
        fetch(`http://localhost:5000/manageorders/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully Shipped the order')
                }
            })

    }
    return (
        <div className='my-5'>
            <h1 className='text-3xl text-white tracking-widest font-semibold mb-8'>Total Orders: {orders.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr className='text-white'>
                            <th></th>
                            <th className='text-lg'>User email</th>
                            <th className='text-lg'>user name</th>
                            <th className='text-lg'>order</th>
                            <th className='text-lg'>quantity</th>
                            <th className='text-lg'>Address</th>
                            <th className='text-lg'>delete</th>
                            <th className='text-lg'>payment</th>
                            <th className='text-lg'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id} className='text-green-200 text-md'>
                                <th>{index + 1}</th>

                                <td> {order.email}</td>

                                <td> {order.userName}</td>

                                <td>{order.productName}</td>

                                <td>{order.orderQuantity} Pcs</td>

                                <td className='uppercase'>{order.address}</td>

                                <td> {!order.paid &&
                                    <span className='btn btn-sm text-xs bg-transparent text-red-500 hover:bg-red-500 hover:text-secondary'>
                                        <button onClick={() => handleAdminDeleteOrder(order._id)}>Delete</button>
                                    </span>
                                }</td>

                                <td>
                                    {!order.paid ? <button className='text-orangerrr'>Not paid</button> : <span className='text-green-400'>Paid</span>}
                                </td>

                                <td>
                                    {!order.paid ? <span className=''></span> :
                                        <>
                                            {order.status === "shipped"
                                                ?
                                                <h1 className='text-green-400'>Shipped</h1>
                                                :
                                                <span className='btn btn-sm text-xs bg-transparent text-orangerrr border border-orangerrr hover:bg-orangerrr hover:text-secondary'>
                                                    <button onClick={() => handleShipment(order._id)}>Pending</button>
                                                </span>}
                                        </>
                                    }
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div >
        </div >
    );
};

export default ManageAllOrders;