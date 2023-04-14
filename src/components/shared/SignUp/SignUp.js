import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import icon from '../../../Assets/Authentication Icons/Mobile login-amico.png'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SignUp = () => {

    const [errorMsg, setErrorMsg] = useState('');
    
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    let signupErrorMessage;
    if (error) {
        signupErrorMessage =
            <div>
                <p className='text-red-500'>Error: {error.message}</p>
            </div>
    }

    if (loading) {
        return 'Loading'
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        if (password !== confirmPassword) {
            setErrorMsg("Password Doesn't Match")
        }
        else {
            await createUserWithEmailAndPassword(email, password, confirmPassword)
        }
    }

    return (
        <div className="hero w-9/12 mx-auto py-12 bg-base-200 text-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-4xl font-bold tracking-widest">Register!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Confirm Password</span>
                            </label>
                            <input type="password" name='confirmPassword' placeholder="confirm password" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <div className="card-actions justify-center w-full">
                                <button type='submit' className='signInBtn mt-2'> Sign Up
                                </button>
                            </div>
                            <h1 className='text-red-500 text-5xl'>{errorMsg}</h1>
                            {signupErrorMessage}
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