import Link from "next/link";
import Head from "next/head";
import style from "../styles/404.module.css";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div className={style.main_container}>
        <div className={style.error_container}>
          <h1 className={style.error_code}>404</h1>
          <h3 className={style.error_message}>The page you&apos;re looking for was not found</h3>
        </div>
        <Link href="/">
          {/* TODO: random project */}
          <a>Show me a random project</a>
        </Link>
        <img
          src="https://media1.tenor.com/images/c47c76ddfeac126790c927d84b253183/tenor.gif?itemid=15689695"
          alt="GIF of a confused man"
          className={style.gif}
        />
      </div>
    </>
  );
}
