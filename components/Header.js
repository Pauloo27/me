import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import style from "@styles/Header.module.css";
import LanguageSelector from "@components/LanguageSelector";

const routeGroups = [
  {
    name: "left",
    routes: [
      { path: "/", name: "Home" },
      { path: "/projects", name: "Projects" },
      { path: "/contact", name: "Contact" },
    ],
  },
  {
    name: "middle",
    routes: [],
  },
  {
    name: "right",
    routes: [
      { name: "Language", path: "#", component: LanguageSelector },
    ],
  },
];

function HeaderLink({ route }) {
  const router = useRouter();
  const { name, path } = route;

  return (
    <Link href={path}>
      <a className={
        cn(style.item, { [style.selected_item]: router.route === path })
      }
      >
        {name}
      </a>
    </Link>
  );
}

export default function Header() {
  return (
    <header className={style.container}>
      {routeGroups.map((group) => (
        <div key={group.name}>
          {group.routes.map((route) => (
            route.component ? (
              <route.component key={route.name} route={route} />
            ) : (
              <HeaderLink key={route.name} route={route} />
            )
          ))}
        </div>
      ))}
    </header>
  );
}
