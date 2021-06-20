import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Contact.css'
import contactImg from '../../Assets/Images/contact.png'


const Contact = () => {
    return (
        <div className="container contact-container py-5 my-5">
            <Navbar/>
            <div className="row">
                <div className="col">
                    <div>
                        <h1>Contact Coming soon..</h1>
                        <img className="my-2" src={contactImg} alt="error-message" />
                        <h3>Thank You.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
