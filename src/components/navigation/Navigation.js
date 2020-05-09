import React, { Component } from 'react';
import './navigation.css'

class Navigation extends Component {
    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <a className="navbar-brand" href="/">
                    <img title="Trailblazer" className="ml-3 logo-nav-bar" alt="Trailblazer" src="images/logo-moi-trailblazer.jpg" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav ml-auto mr-2">
                        <li className="nav-item active">
                            <a className="nav-link" href="#home">Accueil <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#aboutme">A propos de moi</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Réalisations</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#certifications">Certifications</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contactme">Contactez-moi</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://dev-first.com/blog/" target="_blank" rel="noopener noreferrer">Blog</a>
                        </li>
                    </ul>

                </div>
            </nav>
        )
    }
}

export default Navigation;
