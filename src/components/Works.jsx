import React, { useState } from "react";
import projects from "../data/works";
import WorksCard from "./WorksCard";
import WorksModal from "./WorksModal";
import "../styles/mainworks.css";

function Works() {
    const [selectedProject, setSelectedProject] = useState(null);

    // 처음에는 HTML 선택
    const [activeFilter, setActiveFilter] = useState("html");

    const filters = [
        "all",
        "html",
        "javascript",
        "jquery",
        "react",
        "sass",
    ];

    // 필터링
    const filteredProjects =
        activeFilter === "all"
            ? projects
            : projects.filter(
                (project) => project.category === activeFilter
            );

    return (
        <section className="works">
            <div className="inner">

                <div className="works-title">
                    <span>SELECTED WORKS</span>
                    <h2>WORKS</h2>
                </div>

                {/* 필터 버튼 */}
                <div className="works-filter">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            type="button"
                            className={
                                activeFilter === filter
                                    ? "active"
                                    : ""
                            }
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* 프로젝트 */}
                <div className="works-list">
                    {filteredProjects.map((project) => (
                        <WorksCard
                            key={project.id}
                            project={project}
                            onClick={() =>
                                setSelectedProject(project)
                            }
                        />
                    ))}
                </div>

                <WorksModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />

            </div>
        </section>
    );
}

export default Works;
