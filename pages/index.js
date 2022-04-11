import { useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGitlab, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { isMobile } from "react-device-detect";
import style from "../styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    // that doesn't work on mobile
    if (isMobile) return () => { };
    const onWheel = (e) => {
      if (e.deltaY <= 20) return;
      Router.push("/projects");
    };
    window.addEventListener("mousewheel", onWheel);

    return () => {
      window.removeEventListener("mousewheel", onWheel);
    };
  }, []);

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
          <Link href="https://linkedin.com/in/paulofaversani/">
            <a rel="noopener noreferrer" target="_blank" className={style.social_item}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </Link>
          <Link href="https://www.gitlab.com/Pauloo27/">
            <a rel="noopener noreferrer" target="_blank" className={style.social_item}>
              <FontAwesomeIcon icon={faGitlab} />
            </a>
          </Link>
        </div>
        <div className={style.description_container}>
          <p className={style.description}>
            A Computer Engineering Student that sometimes play with Go and uses
            Arch btw.
          </p>
          <div className={style.more}>
            <p>
              {
                isMobile
                  ? "Click the button bellow to see some projects I've made"
                  : "Scroll to see some projects I've made"
              }
            </p>
            <Link href="/projects">
              <a rel="noopener noreferrer" className={style.social_item}>
                <FontAwesomeIcon icon={faChevronDown} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
