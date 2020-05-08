import React, { Component } from 'react';
import './projects.css';
import ProjectItem from '../projectitem/ProjectItem';
import { projectData } from '../../data/projects.js';
import ProjectModal from '../projectmodal/ProjectModal';


class Projects extends Component {

    changeStateModal(project) {
        // Change state to refresh the view 
        this.setState({
            project: project
        });
    }

    // Render is refresh when the state change
    render() {
        const projects = projectData.map((project) =>
            <ProjectItem project={project} key={project.id} changeStateModalFromParent={this.changeStateModal.bind(this)} />
        );
        const projectSelected = this.state ? this.state.project : projects[0].props.project;
        return (
            <div className="block first" id="projects">
                <div className="intro pt-5">Mes Réalisations</div>
                <div className="tagline">Développements / Configurations Salesforce </div>
                <div className="container">
                    <div className="row pb-2" >
                        {projects}
                    </div>
                </div>
                {projectSelected && <ProjectModal project={projectSelected} />}
            </div>
        )
    };
}

export default Projects;