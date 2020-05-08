import React, { Component } from 'react';
import './project-item.css';

class ProjectItem extends Component {

    // Methode handle when a project is selected
    changeModal() {
        this.props.changeStateModalFromParent(this.props.project);
    }
    render() {

        return (
            <div className="col-lg-4 col-md-4 col-sm-4 mb">
                <div className="content-panel pn">
                    <div id="blog-bg">
                        <div className="img-project">
                            <img alt="projects" className="w-100" src={this.props.project.pathImageProject} />
                        </div>
                    </div>
                    <div className="blog-text">
                        <p className="title-project text-color-blue font-weight-bold">{this.props.project.titleProject}</p>
                        <button data-toggle="modal" data-target=".myModal" href="#modal" onClick={this.changeModal.bind(this)} type="button" className="btn btn-primary btn-sm mt-2">Plus d'information</button>
                        {/* <a className="font-italic" data-toggle="modal" data-target=".myModal" href="#modal" onClick={this.changeModal.bind(this)}>Plus d'information</a> */}
                    </div>
                </div>
            </div>
        )
    }
}
export default ProjectItem;