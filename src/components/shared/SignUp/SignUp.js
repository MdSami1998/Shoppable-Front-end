import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../../Assets/Authentication Icons/Mobile login-amico.png'

const SignUp = () => {

    return (
        <div className="hero w-9/12 mx-auto py-12 bg-base-200 text-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form className="card-body">
                        <h1 className="text-4xl font-bold tracking-widest">Register!</h1>
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
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Confirm Password</span>
                            </label>
                            <input type="text" placeholder="confirm password" className="input input-bordered" required/>
                        </div>

                        <div className="form-control">
                            <div className="card-actions justify-center w-full">
                                <button className='signInBtn mt-2'> Sign Up
                                </button>
                            </div>
                            <Link to='/signin'><p className='mt-2 text-sm text-accent'>Already have an account? Sign In</p></Link>
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

export default SignUp;