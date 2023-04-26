import React from 'react';
import './Contact.css'

const Contact = () => {
    return (

        <div className="container mx-auto">
            <div className="content">
                <div className="left-side">
                    <div className="address details">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="text-lg text-accent font-semibold">Address</div>
                        <div className="text-secondary">Kandirpar</div>
                        <div className="text-secondary">Dhaka,Bangladesh</div>
                    </div>
                    <div className="phone details">
                        <i className="fas fa-phone-alt"></i>
                        <div className="text-lg text-accent font-semibold">Phone</div>
                        <div className="text-secondary">+880-1775968038</div>
                        <div className="text-secondary">+880-1521516448</div>
                    </div>
                    <div className="email details">
                        <i className="fas fa-envelope"></i>
                        <div className="text-lg text-accent font-semibold">Email</div>
                        <div className="text-secondary">samizaber822@gmail.com</div>
                        <div className="text-secondary">smd86283@gmail.com</div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="text-3xl text-accent font-bold tracking-wider my-5">Send us a message</div>
                    <p className='text-secondary'>We are open for any suggestion. Or just to have a chat</p>
                    <form >
                        <div className="input-box">
                            <input type="text" placeholder="Enter your name" />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Enter your email" />
                        </div>
                        <div className="input-box message-box">
                            <textarea name="message" id="" cols="30" rows="10" placeholder='Write your message'></textarea>
                        </div>
                        <div className="button">
                            <input type="button" value="Send Now" />
                        </div>
                    </form>
                </div>
            </div>
        </div>



    );
};

export default Contact;