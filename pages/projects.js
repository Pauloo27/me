import Head from "next/head";
import commonStyle from "@styles/Common.module.css";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <div className={commonStyle.page_container}>
        <h1 className={commonStyle.page_title}>
          Work in Progress
        </h1>
      </div>
    </>
  );
}
