import Link from "next/link";
import style from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={style.container}>
      <Link href="/">
        <a className={style.home}>Home</a>
      </Link>
      <div>
        <Link href="/contact">
          <a className={style.item}>Contact</a>
        </Link>
      </div>
    </div>
  );
}
