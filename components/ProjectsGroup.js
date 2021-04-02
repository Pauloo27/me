import style from "../styles/Home.module.css";
import ProjectPreview from "./ProjectPreview";

export default function ProjectsGroup({ group: projects }) {
  return (
    <div className={style.projects_group}>
      {projects.map((project) => <ProjectPreview key={project.name} project={project} />)}
    </div>
  );
}
