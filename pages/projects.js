import Head from "next/head";
import ProjectPreview from "../components/ProjectPreview";
import projects from "../lib/projects";
import style from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <div className={style.content_container}>
        <h1 className={style.text_center}>
          Here are some of my projects:
        </h1>
        <div className={style.content_container}>
          <div className={style.projects_container}>
            {projects.map(
              (project) => <ProjectPreview key={project.name} project={project} />,
            )}
          </div>
        </div>
      </div>
    </>
  );
}
