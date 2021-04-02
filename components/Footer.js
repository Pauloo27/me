import Link from "next/link";
import style from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.container}>
      <Link href="https://www.gitlab.com/Pauloo27/me">
        <a rel="noopener noreferrer" target="_blank" className={style.fork_link}>
          This site is open source, fork me on GitHub!
        </a>
      </Link>
      <p>
        Made by
        {" "}
        <Link href="https://www.gitlab.com/Pauloo27">
          <a rel="noopener noreferrer" target="_blank">
            Pauloo27
          </a>
        </Link>
        {" "}
        using NextJS
      </p>
    </footer>
  );
}
