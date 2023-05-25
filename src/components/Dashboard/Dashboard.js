import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>


            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard' className='text-orangerrr text-xl'>My Profile</Link></li>

                    {!admin && <li><Link to="/dashboard/myorders" className='text-orangerrr text-xl'>My Orders</Link></li>}

                    {admin && <li><Link to='/dashboard/users' className='text-orangerrr text-xl'>Users</Link></li>}

                    {admin && <li><Link to='/dashboard/addproduct' className='text-orangerrr text-xl'>Add Product</Link></li>}

                    {admin && <li><Link to='/dashboard/manageallorders' className='text-orangerrr text-xl'>Manage All Orders</Link></li>} 
                    {admin && <li><Link to='/dashboard/manageproducts' className='text-orangerrr text-xl'>Manage Products</Link></li>}

                    {!admin && <li><Link to='/dashboard/addreview' className='text-orangerrr text-xl'>Add Review</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;