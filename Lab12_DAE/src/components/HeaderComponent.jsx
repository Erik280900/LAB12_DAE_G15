// HeaderComponent.jsx - CORREGIDO
import React from 'react';
import { Link } from 'react-router-dom';

function HeaderComponent() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Series App
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/categories">
                                Categorías
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/series">
                                Series
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default HeaderComponent;