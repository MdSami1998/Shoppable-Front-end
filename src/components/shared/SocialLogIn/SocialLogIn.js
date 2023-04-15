import React from 'react';
import googleIcon from '../../../Assets/Authentication Icons/Google icon.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthenticationLoader from '../AuthenticationLoader/AuthenticationLoader';

const SocialLogIn = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";


    let gErrorMessage;
    if (gError) {
        gErrorMessage =
            <div>
                <p className='text-red-500 font-bold'>Error: {gError.message}</p>
            </div>
    }

    if (gLoading) {
        return <AuthenticationLoader></AuthenticationLoader>
    }

    if (gUser) {
        return navigate(from, { replace: true });
    }

    return (

        <div>
            {gErrorMessage}
            <div onClick={() => signInWithGoogle()} className='mt-3 text-orangerrr border border-orangerrr p-2 rounded text-sm hover:tracking-wider transition-all'>
                <p className='flex justify-center items-center gap-2 cursor-pointer'>Continue with Google<img className='w-6' src={googleIcon} alt="" /></p>

            </div>
        </div>
    );
};

export default SocialLogIn;