import Head from "next/head";
import style from "../styles/Home.module.css";
import ProjectsGroup from "../components/ProjectsGroup";
import { group } from "../lib/utils";
import projects from "../projects";

export default function Home() {
  const projectsGroups = group(projects, 3);
  return (
    <>
      <Head>
        <title>Me, Paulo</title>
      </Head>
      <div className={style.info_container}>
        <h1 className={style.name}>Paulo Eduardo</h1>
        <p className={style.description}>
          A Software Engineer that loves GoLang and uses Arch btw.
          Do you need to know more? Then look at some of my projects:
        </p>
        <div className={style.projects_container}>
          {projectsGroups.map((g, i) => <ProjectsGroup key={i.toString()} group={g} />)}
        </div>
      </div>
    </>
  );
}
