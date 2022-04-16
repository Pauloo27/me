import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import projects from "@lib/projects";
import style from "@styles/404.module.css";
import commonStyle from "@styles/Common.module.css";

function Error404Presenter({ randomProject }) {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div className={commonStyle.page_container}>
        <div className={style.error_container}>
          <h1 className={style.error_code}>404</h1>
          <h3 className={style.error_message}>The page you&apos;re looking for was not found</h3>
        </div>
        <img
          src="/404.gif"
          alt="GIF of a confused man"
          className={style.gif}
        />
        <h3>Useful links:</h3>
        <Link href="/">
          <a rel="noopener noreferrer">Home</a>
        </Link>
        <Link href="/projects">
          <a rel="noopener noreferrer">Project list</a>
        </Link>
        <Link href={randomProject.source}>
          <a rel="noopener noreferrer" target="_blank">Random project</a>
        </Link>
      </div>
    </>
  );
}

function Error404Container() {
  const [randomProject, setRandomProject] = useState(projects[0]);

  useEffect(() => {
    setRandomProject(projects[Math.floor(Math.random() * projects.length)]);
  }, []);

  return <Error404Presenter randomProject={randomProject} />;
}

const Error404 = Error404Container;
export default Error404;
