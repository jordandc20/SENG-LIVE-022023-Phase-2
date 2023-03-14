const ProjectListItem = ({ id, name, phase, image, link, about }) => {

    return (
        <li className='card'>
            <figure className='image'>
                <img src={image} alt={name} />
            </figure>

        </li>
    )
}

export default ProjectListItem