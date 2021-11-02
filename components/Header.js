import Link from "next/link";
import style from "../styles/Header.module.css";
import { useRouter } from "next/router";
import cn from "classnames";

const routes = [
  { path: "/", name: "Home" },
  { path: "/contact", name: "Contact" },
];

export default function Header() {
  const router = useRouter();

  return (
    <header className={style.container}>
      {routes.map(route => {
        return (
          <Link key={route.name} href={route.path} >
            <a className={cn(style.item, { [style.selected_item]: router.route === route.path })}>{route.name}</a>
          </Link>
        )
      })}
    </header >
  );
}
