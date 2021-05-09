
import { Component } from 'react'
import ProjectPreview from '../ProjectPreview/ProjectPreview'

import './ProjectList.scss'

export class ProjectList extends Component {
    render() {
        const { projects } = this.props
        return (
            <div>
                <div id="projects">
                    <h1>My Projects</h1>
                    <div className="projects-container">
                        {projects.map((proj, idx) => (
                            <ProjectPreview key={idx} project={proj}></ProjectPreview>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
