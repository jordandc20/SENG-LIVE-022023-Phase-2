import ProjectListItem from "./ProjectListItem"

const ProjectList = ({ projects }) => {

    const projectListItems = projects.map((project) => (<ProjectListItem key={project.id} {...project} />))

    return (
        <section>
            <h2>Projects</h2>
            <ul className='cards'>
                {projectListItems}
            </ul>
        </section>
    )
}

export default ProjectList