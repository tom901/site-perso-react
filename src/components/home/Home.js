import React, { Component } from 'react';
import './home.css';

class Home extends Component {
    render() {
        return (
            <div className="main-home intro-header-home" id="home">
            <span className="title-block">
                <div className="intro">Thomas Paraiso</div>
                <div className="sub-title-home-first">Consultant Salesforce</div>
                <div className="sub-title-home"> Lightning Components | Apex | Visualforce  </div>
            </span>
                <hr className="intro-divider"></hr>
                <div className="icons-social">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/tom901"><i className="fab fa-github"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/thomaiso"><i className="fab fa-twitter"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/thomasparaiso"><i className="fab fa-linkedin"></i></a>

                </div>
            </div>
        )
    };
}

export default Home;