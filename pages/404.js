import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import projects from "@lib/projects";
import style from "@styles/404.module.css";
import commonStyle from "@styles/Common.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

function Error404Presenter({ randomProject }) {
  const { t } = useTranslation("404");

  return (
    <>
      <Head>
        <title>{t("pageTitle")}</title>
      </Head>
      <div className={commonStyle.page_container}>
        <div className={style.error_container}>
          <h1 className={style.error_code}>404</h1>
          <h3 className={style.error_message}>{t("pageNotFound")}</h3>
        </div>
        <img
          src="/404.gif"
          alt="GIF of a confused man"
          className={style.gif}
        />
        <h3>{t("usefulLinks")}</h3>
        <Link href="/">
          <a rel="noopener noreferrer">{t("usefulLinks.home")}</a>
        </Link>
        <Link href="/projects">
          <a rel="noopener noreferrer">{t("usefulLinks.projects")}</a>
        </Link>
        <Link href={randomProject.source}>
          <a rel="noopener noreferrer" target="_blank">{t("usefulLinks.randomProject")}</a>
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "404"])),
    },
  };
}

const Error404 = Error404Container;
export default Error404;
