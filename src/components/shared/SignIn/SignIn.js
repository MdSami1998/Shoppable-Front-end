import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import icon from '../../../Assets/Authentication Icons/Mobile login-amico.png'
import '../SignIn/SignIn.css'
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import Loader from '../Loader/Loader';
import AuthenticationLoader from '../AuthenticationLoader/AuthenticationLoader';

const SignIn = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate()
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let signInErrorMessage;
    if (error) {
        signInErrorMessage =
            <div>
                <p className='text-red-500 font-bold'>Error: {error.message}</p>
            </div>
    }

    if (loading) {
        return <AuthenticationLoader></AuthenticationLoader>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    // handle sign In function 
    const handleSignIn = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        await signInWithEmailAndPassword(email, password);
    }
    return (
        <div className="hero w-full md:w-9/12 mx-auto my-0 md:my-10 py-12 bg-base-200 text-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleSignIn} className="card-body">
                        <h1 className="text-4xl font-bold tracking-widest">Signin now!</h1>

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

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-xs text-accent">Forgot password?</a>
                            </label>
                            {signInErrorMessage}
                        </div>

                        <div className="form-control">
                            <div className="card-actions justify-center w-full">
                                <button type='submit' className='signInBtn'> Sign In
                                </button>
                            </div>
                            <SocialLogIn></SocialLogIn>
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