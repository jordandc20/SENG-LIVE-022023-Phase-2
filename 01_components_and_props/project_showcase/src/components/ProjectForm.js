const ProjectForm = () => {
    return (

        <section>
            <form className="form">
                <h3>Add Project</h3>
                <label>Name</label>
                <input type='text' id='name' name='name' />
                <label>description</label>                
            <input type='text' id='description' name='description' />
            <input type='submit'/>
            </form>
        </section>
    )
}

export default ProjectForm