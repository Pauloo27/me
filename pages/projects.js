import Head from "next/head";
import style from "@styles/Projects.module.css";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <div className={style.content_container}>
        <h1 className={style.text_center}>
          Work in Progress
        </h1>
      </div>
    </>
  );
}
