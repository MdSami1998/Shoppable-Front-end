import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const Myorders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    // load order in My Order page of Dashboard
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()
            })
            .then(data =>
                setOrders(data));
    }, [user, orders, navigate]);


    // handle order cancel button from My Order page in Dashboard
    const handleCancelOrder = (id) => {
        const url = `http://localhost:5000/order/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deleteCount > 0) {
                    const remaining = orders.filter(product => product._id !== id);
                    setOrders(remaining);
                }
            })
    }

    return (
        <div className='my-10'>
            <h1 className='text-3xl font-semibold mb-7 text-white tracking-wider'>Orders: {orders.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr className='text-white'>
                            <th></th>
                            <th className='text-lg'>Product</th>
                            <th className='text-lg'>Quantity</th>
                            <th className='text-lg'>Price</th>
                            <th className='text-lg'>Delete</th>
                            <th className='text-lg'>Payment</th>
                            <th className='text-lg'>Transaction Id</th>
                            <th className='text-lg'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id} className='text-white text-md'>
                                <th>{index + 1}</th>

                                <td>{order.productName}</td>

                                <td>{order.orderQuantity} {order.orderUnit}</td>

                                <td>$ {order.orderPrice}</td>

                                <td>
                                    {!order.paid && <label htmlFor="my-modal" className='btn btn-sm text-xs bg-transparent text-red-500 hover:bg-red-500 hover:text-secondary'>Cancel</label>}

                                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                                    <div className="modal">
                                        <div className="modal-box">
                                            <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2 bg-accent text-black">✕</label>
                                            <h3 className="font-bold text-lg">Do you want to cancel the order?</h3>
                                            <div className="modal-action flex justify-center">
                                                <button>cancel</button>
                                                <label onClick={() => handleCancelOrder(order._id)} htmlFor="my-modal" className='btn btn-md text-md bg-red-500 hover:text-red-500 text-black'>Yes</label>
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    {!order.paid
                                        ?
                                        <span className='btn btn-sm text-xs bg-transparent text-orangerrr border border-orangerrr hover:bg-orangerrr hover:text-secondary'>
                                            <Link to={`/dashboard/payment/${order._id}`}><button>Pay</button></Link>
                                        </span>
                                        :
                                        <span>Paid</span>}
                                </td>

                                <td>
                                    {order.transectionID && <span className='text-green-400'>{order.transectionID}</span>}
                                </td>

                                <td>
                                    {order.status
                                        ?
                                        <p className='text-green-400'>Shipped</p>
                                        :
                                        <p className='text-orangerrr'>{!order.paid ? "" : "Shipping"}</p>}
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div >
        </div >
    );
};

export default Myorders;