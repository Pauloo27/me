import "../styles/theme.css";
import "../styles/globals.css";
import Header from "../components/Header";
import style from "../styles/App.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className={style.main_container}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
