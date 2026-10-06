function ProjectCard({ project, position, onClick }) {
    const CARD_DISTANCE = 500;

    const isActive = position === 0;
    const isSide = Math.abs(position) === 1;

    const x = position * CARD_DISTANCE;

    return (
        <article
            className={`
                project-card
                ${isActive ? "is-active" : ""}
                ${isSide ? "is-side" : ""}
            `}
            style={{
                transform: `translate3d(calc(-50% + ${x}px), -50%, 0) scale(${isActive ? 1 : 0.82})`,
                opacity: isActive ? 1 : isSide ? 0.3 : 0,
                zIndex: isActive ? 10 : 1,
            }}
            onClick={onClick}
            role="button"
            tabIndex="0"
        >
            <div className="project-card-inner">

                <div className="project-image">
                    <img
                        src={project.image}
                        alt={project.title}
                    />
                </div>

                <div className="project-info">

                    <span className="project-type">
                        {project.type}
                    </span>

                    <h3>{project.title}</h3>

                    <p className="project-description">
                        {project.description}
                    </p>

                    <div className="project-bottom">

                        <span className="project-period">
                            {project.period}
                        </span>

                        <div className="project-skills">
                            {project.skills.map((skill) => (
                                <span key={skill}>
                                    {skill}
                                </span>
                            ))}
                        </div>

                    </div>

                </div>

            </div>
        </article>
    );
}

export default ProjectCard;
