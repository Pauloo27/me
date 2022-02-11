import "../styles/theme.css";
import "../styles/globals.css";
import "../styles/waves.css";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import style from "../styles/App.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta property="og:site_name" content="Pauloo27" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Me, Paulo" />
        <meta property="og:description" content="My portfolio" />
        <meta property="og:url" content="https://pauloo27.dev" />
        <meta property="og:image" content="/icon.png" />
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

export default MyApp;
