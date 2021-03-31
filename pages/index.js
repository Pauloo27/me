import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGitlab } from "@fortawesome/free-brands-svg-icons";
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
        <div className={style.social_container}>
          <Link href="https://www.github.com/Pauloo27/">
            <a rel="noopener noreferrer" target="_blank" className={style.social_item}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Link>
          <Link href="https://www.gitlab.com/Pauloo27/">
            <a rel="noopener noreferrer" target="_blank" className={style.social_item}>
              <FontAwesomeIcon icon={faGitlab} />
            </a>
          </Link>
        </div>
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
