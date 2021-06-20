import React from 'react';
import { useHistory } from 'react-router';
import './Service.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle, faBus, faCar, faTrain } from '@fortawesome/free-solid-svg-icons'


const Service = (props) => {
    const { transportName, mainImage } = props.service;
    const history = useHistory();

    const handleRide = (rideType) => {
        history.push(`/service/${rideType}`);
    }

    return (
        <div className="main-card">
            <div className="card  m-3">
                <img src={mainImage} className="card-img-top" alt="serviceImg" />
                <div className="card-body">
                    <h5 className="card-title">{transportName}</h5>
                    <p className="card-text">We serve modern facilities with cheap price. You can enjoy the <strong>{transportName}</strong> journey,if you want please book your seat.</p>
                    <button onClick={() => handleRide(transportName)} className="btn px-5 cardBtn">LET'S GO  {
                        transportName === 'bike' ? <FontAwesomeIcon icon={faMotorcycle} /> : <FontAwesomeIcon icon={faCar} /> && 
                        transportName === 'car' ? <FontAwesomeIcon icon={faCar} /> : <FontAwesomeIcon icon={faBus} /> && 
                        transportName === 'bus' ? <FontAwesomeIcon icon={faBus} /> : <FontAwesomeIcon icon={faTrain} />
                    }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Service;