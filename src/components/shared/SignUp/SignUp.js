import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import icon from '../../../Assets/Authentication Icons/Mobile login-amico.png'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import AuthenticationLoader from '../AuthenticationLoader/AuthenticationLoader';
import useToken from '../../../hooks/useToken';

const SignUp = () => {

    const [errorMsg, setErrorMsg] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [token] = useToken(user);

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    let signupErrorMessage;
    if (error) {
        console.log(error)
        signupErrorMessage =
            <div>
                <p className='text-red-500'>Error: {error.message}</p>
            </div>
    }

    if (loading) {
        return <AuthenticationLoader></AuthenticationLoader>
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
            await createUserWithEmailAndPassword(email, password)
        }
    }

    return (
        <div className="hero w-full md:w-9/12 mx-auto py-12 bg-base-200 text-white my-0 md:my-10">
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

                        <h1 className='text-red-500 '>{errorMsg}</h1>

                        <div className="form-control">
                            <div className="card-actions justify-center w-full">
                                <button type='submit' className='signInBtn mt-2'> Sign Up
                                </button>
                            </div>
                            {signupErrorMessage}
                            <SocialLogIn></SocialLogIn>
                            <Link to='/signin'><p className='mt-2 text-sm text-accent hover:underline hover:text-sky-400'>Already have an account? Sign In</p></Link>
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