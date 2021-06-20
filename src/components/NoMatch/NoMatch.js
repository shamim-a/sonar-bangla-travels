import React from 'react';
import './NoMatch.css'
import errorImg from '../../Assets/Images/error.jpg'
import Navbar from '../Navbar/Navbar';

const NoMatch = () => {
    return (
        <div className="container error-container py-5 my-5">
            <div className="row">
                <div className="col">
                    <div>
                        <Navbar/>
                        <h1>404! Not Found!</h1>
                        <img src={errorImg} alt="error-message" />
                        <h3>Your Search items are not found.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoMatch;