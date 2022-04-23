import { useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import Link from "next/link";
import FA from "react-fontawesome";
import { isMobile } from "react-device-detect";
import style from "@styles/Home.module.css";
import commonStyle from "@styles/Common.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function HomePresenter() {
  return (
    <>
      <Head>
        <title>Me, Paulo</title>
      </Head>
      <div className={commonStyle.page_container}>
        <h1 className={commonStyle.page_title}>Paulo Eduardo Faversani</h1>
        <div className={style.social_container}>
          <Link href="https://www.github.com/Pauloo27/">
            <a rel="noopener noreferrer" target="_blank" className={style.social_item}>
              <FA name="github" />
            </a>
          </Link>
          <Link href="https://linkedin.com/in/paulofaversani/">
            <a rel="noopener noreferrer" target="_blank" className={style.social_item}>
              <FA name="linkedin" />
            </a>
          </Link>
          <Link href="https://www.gitlab.com/Pauloo27/">
            <a rel="noopener noreferrer" target="_blank" className={style.social_item}>
              <FA name="gitlab" />
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
                <FA name="chevron-down" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function HomeContainer() {
  useEffect(() => {
    // that doesn't work on mobile
    if (isMobile) return () => { };
    const onWheel = (e) => {
      if (e.deltaY <= 20) return;
      Router.push("/projects");
    };
    window.addEventListener("wheel", onWheel);

    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  return <HomePresenter />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
}

const Home = HomeContainer;

export default Home;
