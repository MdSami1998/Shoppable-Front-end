import React from 'react';
import './AuthenticationLoader.css'

const AuthenticationLoader = () => {
    return (

        <div className="authenticationLoader mx-auto my-5">
            <div className="authenticationLoader__dot"></div>
            <div className="authenticationLoader__dot"></div>
            <div className="authenticationLoader__dot"></div>
        </div>
    );
};

export default AuthenticationLoader;