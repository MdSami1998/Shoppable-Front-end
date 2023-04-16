import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { useQuery } from 'react-query';
import Loader from '../shared/Loader/Loader';
import { toast } from 'react-toastify';

const Order = () => {

    const { orderId } = useParams();

    const [user] = useAuthState(auth);
    const [price, setPrice] = useState(0)
    const [quan, setQuan] = useState(0);
    const orderRef = useRef();

    const { data: product, isLoading } = useQuery('product', () =>
        fetch(`http://localhost:5000/product/${orderId}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loader></Loader>
    }

    const handlePrice = () => {
        const price = product.price;
        const orderQuantity = orderRef.current.value;
        setQuan(orderQuantity);
        const newPrice = price * orderQuantity
        setPrice(newPrice)
    }


    const handleOrderBtn = (e) => {
        e.preventDefault();
        const stock = product.stock;

        const email = user?.email;
        const userName = user?.displayName;
        const productName = product.name;
        const quantity = e.target.quantity.value;
        const address = e.target.address.value;
        const phone = e.target.phone.value;

        const order = { email, userName, productName, quantity, address, phone, price };

        if (quantity > stock) {
            return toast.warning(`Stock available ${stock}.You can't purchage more then ${stock}`)
        }

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Order Placed!')
                }
            })
        e.target.reset();
        setPrice(0)
    }

    return (
        <form onSubmit={handleOrderBtn} className="hero md:min-h-full">
            <div className="hero-content flex-col lg:flex-row md:w-3/5">
                <div>
                    <img className='w-full md:w-96 mx-auto' src={product.image} alt="" />
                    <div className='mt-2 border border-accent p-2 rounded '>
                        <p className='text-accent text-xl font-semibold mb-2'>{product.name}</p>
                    </div>
                </div>

                <div className="card-body p-0 md:p-8 w-full">
                    <div className="form-control">
                        <input type="text" value={user?.displayName} disabled className="input input-bordered uppercase" name='name' />
                    </div>
                    <div className="form-control">
                        <input type="email" value={user?.email} disabled className="input input-bordered" name='email' />
                    </div>
                    <div className="form-control">
                        <input type="text" value={product.name} className="input input-bordered" disabled name='productName' />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-accent">Stock Available:</span>
                        </label>
                        <input type="text" value={`${product.stock}`} className="input input-bordered" disabled name='stock' />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-accent">Quantity</span>
                        </label>
                        <input ref={orderRef} onChange={handlePrice} type="number" placeholder='Quantity' className="input input-bordered" name='quantity' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-accent">Price: ${product.price}  </span>
                        </label>
                        <input type="text" value={price} className="input input-bordered" required disabled />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-accent">Address:</span>
                        </label>
                        <input type="text" placeholder='Address' className="input input-bordered" name='address' required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-accent">Phone:</span>
                        </label>
                        <input type="tel" placeholder='+880' className="input input-bordered" name='phone' />
                    </div>

                    <button disabled={(quan > product.stock) ? true : false} type='submit' className="btn btn-secondary sm:btn-sm md:btn-md hover:bg-transparent hover:text-secondary">purchase</button>
                </div>
            </div>
        </form>
    );
};

export default Order;