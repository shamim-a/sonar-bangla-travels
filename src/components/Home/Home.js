import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <div className="py-2 my-5 text-center mx-auto d-flex service-container" >
                <div className="py-3">
                    <h2>OUR SERVICES</h2>
                    <hr />
                    <Services/>
                </div>
            </div>
        </div>
    );
};

export default Home;