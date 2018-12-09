import React, { Component } from 'react';
import Clock from 'react-live-clock';
import './navigation.css'

class Navigation extends Component {
    render() {
        // Date today inside the header
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        // var seconds = today.getSeconds();
        // var minutes = today.getMinutes();
        // var hour = today.getHours();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        today = mm + '/' + dd + '/' + yyyy+' - ';

       

          

        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <a className="navbar-brand" href="/">
                    <img title="Trailblazer" className="ml-3 logo-nav-bar" alt="Trailblazer" src="images/logo-moi-trailblazer.jpg" />
                </a>
                <span className="text-color-white">{today}<Clock format={'HH:mm:ss'} ticking={true}/> </span>
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
                    </ul>

                </div>
            </nav>
        )
    }
}

export default Navigation;
