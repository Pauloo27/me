import "@styles/theme.css";
import "@styles/globals.css";
import "@styles/waves.css";
import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import style from "@styles/App.module.css";
import { appWithTranslation, useTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  const { t } = useTranslation("home");

  return (
    <>
      <Head>
        <meta property="og:site_name" content="Pauloo27" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t("pageTitle")} />
        <meta property="og:description" content={t("bio")} />
        <meta property="og:url" content="https://pauloo27.dev" />
        <meta property="og:image" content="/icon.png" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#C0FFEE" />
        <meta
          name="description"
          content={t("bio")}
        />
      </Head>
      <div className={style.main_container}>
        <div>
          <Header />
          <main className={style.content_container}>
            <Component {...pageProps} />
          </main>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default appWithTranslation(MyApp);
