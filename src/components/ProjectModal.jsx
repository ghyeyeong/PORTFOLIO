import React from "react";

function ProjectModal({ project, onClose }) {
    if (!project) return null;

    return (
        <div
            className="project-modal"
            onClick={onClose}
        >
            <div
                className="project-modal-content"
                onClick={(e) => e.stopPropagation()}
            >

                <button
                    type="button"
                    className="project-modal-close"
                    onClick={onClose}
                    aria-label="모달 닫기"
                >
                    ×
                </button>


                {/* 이미지 */}
                <div className="project-modal-image">
                    <img
                        src={project.image}
                        alt={project.title}
                    />
                </div>


                {/* 정보 */}
                <div className="project-modal-info">

                    <span className="project-modal-type">
                        {project.type}
                    </span>

                    <h2>{project.title}</h2>

                    <p className="project-modal-description">
                        {project.description}
                    </p>


                    {/* 기간 */}
                    {project.period && (
                        <div className="project-modal-period">
                            <strong>Period</strong>
                            <span>{project.period}</span>
                        </div>
                    )}


                    {/* 기술 */}
                    <div className="project-modal-skills">

                        {project.skills?.map((skill) => (
                            <span key={skill}>
                                {skill}
                            </span>
                        ))}

                    </div>


                    {/* 버튼 */}
                    <div className="project-modal-buttons">

                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        )}

                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Web Site
                            </a>
                        )}

                        {project.figma && (
                            <a
                                href={project.figma}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Figma
                            </a>
                        )}

                    </div>


                </div>

            </div>
        </div>
    );
}

export default ProjectModal;
