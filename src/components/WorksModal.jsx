import React from "react";

function WorksModal({ project, onClose }) {
    if (!project) return null;

    return (
        <div className="modal" onClick={onClose}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="modal-close"
                    onClick={onClose}
                    aria-label="모달 닫기"
                >
                    ×
                </button>

                <div className="modal-image">
                    <img
                        src={project.image}
                        alt={project.title}
                    />
                </div>

                <div className="modal-info">
                    <span className="modal-category">
                        {project.category}
                    </span>

                    <h2>{project.title}</h2>

                    <p>{project.description}</p>

                    <div className="modal-skills">
                        {project.skills?.map((skill) => (
                            <span key={skill}>
                                {skill}
                            </span>
                        ))}
                    </div>

                    <div className="modal-buttons">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>

                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Web Site
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorksModal;
