import React, { Component } from 'react';

class ContactMe extends Component {
    render() {
        return (
            <div className="block first" id="contactme">
                <div className="intro">Contactez-moi</div>
                <div className="tagline">
                    <p>Mon objectif est de vous accompagner dans la mise en place et l'utilisation de votre Salesforce</p>
                    <p>N'hésitez pas à me contacter</p>
                </div>
                <div >
                    <a href="mailto:thomas.paraiso@me.com?subject=Demande de renseignements complémentaires">thomas.paraiso@me.com</a>
                </div>
                <div className="tagline">Retrouvez moi sur </div>
                <p>
                    <a title="malt.fr" target="_blank" rel="noopener noreferrer" className="font-weight-bold" href="https://www.malt.fr/profile/thomasparaiso">
                        <img title="Mon profil Malt" className="img-malt" alt="malt.fr" src="/images/logo-malt.png" />
                    </a>
                </p>
            </div>
        )
    };
}

export default ContactMe;