import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
// import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import ContactMe from './components/contactme/ContactMe';
import AboutMe from './components/aboutme/AboutMe';
import Projects from './components/projects/Projects';
import Certifications from './components/certifications/Certifications';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navigation />
                <Home />
                <AboutMe />
                <Projects />
                <Certifications />
                <ContactMe />
            </div >
        );
    }
}

export default App;
