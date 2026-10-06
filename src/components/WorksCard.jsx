import React from "react";

function WorksCard({ project, onClick }) {
    return (
        <article
            className={`works-card ${project.category}`}
            onClick={onClick}
            tabIndex="0"
            role="button"
        >
            <div className="works-card-image">
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                />
            </div>

            <div className="works-card-info">
                <span>{project.category}</span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>
            </div>
        </article>
    );
}

export default WorksCard;
