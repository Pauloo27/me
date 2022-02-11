import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import style from "../styles/Header.module.css";

const routeGroups = [
  {
    name: "left",
    routes: [
      { path: "/", name: "Home" },
    ],
  },
  {
    name: "middle",
    routes: [],
  },
  {
    name: "right",
    routes: [
      { path: "/projects", name: "Projects" },
      { path: "/contact", name: "Contact" },
    ],
  },
];

export default function Header() {
  const router = useRouter();

  return (
    <header className={style.container}>
      {routeGroups.map((group) => (
        <div key={group.name}>
          {group.routes.map((route) => (
            <Link key={route.name} href={route.path}>
              <a className={
                cn(style.item, { [style.selected_item]: router.route === route.path })
              }
              >
                {route.name}
              </a>
            </Link>
          ))}
        </div>
      ))}
    </header>
  );
}
