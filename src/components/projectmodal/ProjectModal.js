import React, { Component } from 'react';
import './project-modal.css';

class ProjectModal extends Component {

    render() {
        return (
           
            <div className="modal fade myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
             
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">

                            <div className="modal-title" >
                                <h6 className="title-modal">{this.props.project.titleProject}</h6>
                                <p className="title-modal" >Durée du projet : </p>
                                <p>{this.props.project.timeProject}</p>
                            </div>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>

                        </div>
                        <div className="modal-body">
                            <p className="title-modal" >Contexte :</p>
                            <p dangerouslySetInnerHTML={{ __html: this.props.project.textProject }} />
                            <p className="title-modal" >Tâches réalisées :</p>
                            <div dangerouslySetInnerHTML={{ __html: this.props.project.tasks }} />
                            <p className="title-modal" >Environnement technique :</p>
                            <div dangerouslySetInnerHTML={{ __html: this.props.project.toolsUsed }} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}
export default ProjectModal;