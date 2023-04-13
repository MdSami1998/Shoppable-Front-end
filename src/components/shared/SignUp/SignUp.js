import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../../Assets/Authentication Icons/Mobile login-amico.png'

const SignUp = () => {

    return (
        <div className="hero w-9/12 mx-auto py-12 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    
                    <div className="card-body">
                    <h1 className="text-5xl font-bold">Register!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <Link to='/signup'><h6 className='mt-2'>Create New Account</h6></Link>
                        </div>
                    </div>
                </div>
                <div className="text-center lg:text-left">
                    <img className='w-96' src={icon} alt="" />
                </div>

            </div>
        </div>
    );
};

export default SignUp;