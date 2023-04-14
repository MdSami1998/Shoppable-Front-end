import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../../Assets/Authentication Icons/Mobile login-amico.png'
import '../SignIn/SignIn.css'

const SignIn = () => {

    return (
        <div className="hero w-9/12 mx-auto py-12 bg-base-200 text-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form className="card-body">
                        <h1 className="text-4xl font-bold tracking-widest">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" required/>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" required/>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-xs text-accent">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control">
                            <div className="card-actions justify-center w-full">
                                <button className='signInBtn'> Sign In
                                </button>
                            </div>
                            <Link to='/signup'><p className='mt-2 text-sm text-accent'>Create New Account?</p></Link>
                        </div>
                    </form>
                </div>
                <div className="text-center lg:text-left">
                    <img className='w-96' src={icon} alt="" />
                </div>

            </div>
        </div>
    );
};

export default SignIn;