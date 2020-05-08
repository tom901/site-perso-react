import React, { Component } from 'react';

class AboutMe extends Component {
    render() {
        return (
            <div className="block second  pt-5" id="aboutme">
            <div className="roundedImage">
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/thomasparaiso">
                    <img title="LinkedIn" alt="Retrouvez moi sur Linkedin" className="mt-2 size-image-full" src="images/photoMeAbout.jpg" />
                </a>
            </div>
            <div className="intro">A propos de moi</div>
            <div className="tagline mb-3">Scrum Master et Développeur sur différents projets Salesforce réalisés avec succès</div>
            <div className="container">
                <div className="row">
                    <div className="text-justify">
                        <p>Mon domaine d’activité principal est l’intégration de solutions Salesforce (CRM) ainsi que le développement de modules complémentaires personnalisés (Lightning Web Component, Apex, Visualforce, Aura). </p>
                        <p>J’interviens également sur des sujets annexes tels que la réalisation d’interface entre plusieurs applications (Talend), la création de nouveaux sites afin d’améliorer l’expérience de l’utilisateur (React, NodeJS, Javascript).</p>
                        <p>Je suis certifié Service Cloud, Community, App Builder, Admin et Platform Developer I , ce qui me permet d’intervenir sur des sujets de programmations et de paramétrages divers.</p>
                    </div>
                </div>
            </div>
        </div>
        )
    };
}

export default AboutMe;