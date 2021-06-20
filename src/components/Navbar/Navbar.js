import React, { useContext } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrain } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="navbar-container">
            <nav className="navbar navbar-expand-lg navbar-light py-3 fixed-top px-3">
                <div className="container">
                    <Link to="/" className="navbar-brand logo-brand-name" href="#"><FontAwesomeIcon icon={faTrain} /> SONARBANGLA TRAVELS</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto" id ="navBar-Items">
                            <Link to="/home" className="nav-link px-3 mx-1" aria-current="page">HOME</Link>
                            <Link to="/destination" className="nav-link px-3 mx-1">DESTINATION</Link>
                            <Link to="/contact" className="nav-link px-3 mx-1">CONTACT</Link>
                            {
                                loggedInUser.email ? <Link className="nav-link" id="user-name">{loggedInUser.name}</Link> : <Link to="/login" className="nav-link btn btn-success px-2 mx-1">LOG IN</Link>
                            }
                            {
                                loggedInUser.email ? <button className="log-out-btn btn-danger" onClick={() => setLoggedInUser({})}>LOG OUT</button> : ''
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;