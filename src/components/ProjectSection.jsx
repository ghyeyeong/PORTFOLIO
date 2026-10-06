import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import "../styles/project.css";

function ProjectSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    // 선택된 팀 프로젝트
    const [selectedProject, setSelectedProject] = useState(null);

    const handlePrev = () => {
        setActiveIndex((prev) => {
            if (prev === 0) {
                return projects.length - 1;
            }

            return prev - 1;
        });
    };

    const handleNext = () => {
        setActiveIndex((prev) => {
            if (prev === projects.length - 1) {
                return 0;
            }

            return prev + 1;
        });
    };

    return (
        <section className="project-section">

            <div className="project-title">
                <span>SELECTED WORKS</span>
                <h2>TEAM WORKS</h2>
            </div>


            <div className="project-slider">

                {projects.map((project, index) => {

                    let position = index - activeIndex;

                    // 마지막 → 첫 번째 연결
                    if (position > projects.length / 2) {
                        position -= projects.length;
                    }

                    // 첫 번째 → 마지막 연결
                    if (position < -projects.length / 2) {
                        position += projects.length;
                    }

                    return (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            position={position}
                            onClick={() => setSelectedProject(project)}
                        />
                    );
                })}

            </div>


            <div className="project-navigation">

                <button
                    type="button"
                    className="project-prev"
                    onClick={handlePrev}
                    aria-label="이전 프로젝트"
                >
                    <span>PREV</span>
                </button>


                <button
                    type="button"
                    className="project-next"
                    onClick={handleNext}
                    aria-label="다음 프로젝트"
                >
                    <span>NEXT</span>
                </button>

            </div>


            <div className="project-count">

                <span>
                    {String(activeIndex + 1).padStart(2, "0")}
                </span>

                <i />

                <span>
                    {String(projects.length).padStart(2, "0")}
                </span>

            </div>


            {/* 프로젝트 모달 */}
            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />

        </section>
    );
}

export default ProjectSection;
