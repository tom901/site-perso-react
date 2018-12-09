import React, { Component } from 'react';

class Certifications extends Component {
    render() {
        return (
            <div className="certification-block second pt-4" id="certifications">
                <div className="intro">Mes Certifications</div>
                <div className="tagline">
                    {/* <p >
                        <a className="text-color-white" target="_blank" rel="noopener noreferrer" href="https://trailhead.salesforce.com/credentials/certification-detail-print?searchString=003G0000024zqokIAA">
                            <img className="img-mobile  certif-img-salesforce" title="Certifications Salesforce" src="/images/certification-salesforce.png" alt="https://trailhead.salesforce.com/fr/credentials/certification-detail-print?searchString=003G0000024zqokIAA" />
                        </a>
                    </p> */}



                    <div className="container">
                        <div className="row pb-2" >

                            <div className="col-lg-4 col-md-4 col-sm-4 mb">
                                <div className="content-panel pn">
                                    <div id="blog-bg">
                                        <div className="img-project">
                                            <a className="text-color-white" target="_blank" rel="noopener noreferrer" href="https://trailhead.salesforce.com/credentials/certification-detail-print?searchString=003G0000024zqokIAA">
                                                <img alt="projects" className="w-100 mt-4" src='/images/SalesforceCertifiedPlatformAppBuilder.jpg' />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="blog-text mt-4">
                                        <p className="title-project text-color-blue font-weight-bold">28 Mars 2018</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-4 mb">
                                <div className="content-panel pn">
                                    <div id="blog-bg">
                                        <div className="img-project">
                                            <a className="text-color-white" target="_blank" rel="noopener noreferrer" href="https://trailhead.salesforce.com/credentials/certification-detail-print?searchString=003G0000024zqokIAA">
                                                <img alt="projects" className="w-100 mt-4" src='/images/SalesforceCertifiedAdministrator.jpg' />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="blog-text mt-4">
                                        <p className="title-project text-color-blue font-weight-bold">27 Juillet 2018</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-4 mb">
                                <div className="content-panel pn">
                                    <div id="blog-bg">
                                        <div className="img-project">
                                            <a className="text-color-white" target="_blank" rel="noopener noreferrer" href="https://trailhead.salesforce.com/credentials/certification-detail-print?searchString=003G0000024zqokIAA">
                                                <img alt="projects" className="w-100 mt-4" src='/images/SalesforceCertifiedPlatformDeveloperI.jpg' />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="blog-text mt-4">
                                        <p className="title-project text-color-blue font-weight-bold ">26 Février 2016</p>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>



                <p className="tagline mt-4"><a className="text-color-white " target="_blank" rel="noopener noreferrer" href="https://trailhead.salesforce.com/en/me/005500000060RKxAAM">Profil Trailhead</a></p>
                <p>
                    <a className="text-color-white" target="_blank" rel="noopener noreferrer" href="https://trailhead.salesforce.com/en/me/005500000060RKxAAM">
                        <img title="Mon profil Trailhead" className="img-mobile-trailhead" alt="Trailhead Salesforce" src="/images/trailhead-logo.svg" />
                    </a>
                </p>
            </div>
        )
    };
}

export default Certifications;