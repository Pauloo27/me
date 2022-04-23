import Link from "next/link";
import FA from "react-fontawesome";
import { useRouter } from "next/router";
import cn from "classnames";
import style from "@styles/Header.module.css";
import LanguageSelector from "@components/LanguageSelector";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { useTranslation } from "next-i18next";

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
  const { t } = useTranslation();

  return (
    <Link href={path}>
      <a className={
        cn(style.item, { [style.selected_item]: router.route === path })
      }
      >
        {t(`header.${name}`)}
      </a>
    </Link>
  );
}

function MobileHeaderLinks({ handleClick }) {
  const routes = routeGroups.reduce((acc, group) => [...acc, ...group.routes], []);
  return (
    <div className={style.mobile_menu_container}>
      <button aria-label="close menu" type="button" className={style.mobile_menu_button} onClick={handleClick}>
        <FA className={style.mobile_menu_icon} size="lg" name="close" />
      </button>
      {routes.map((route) => (
        route.component ? (
          <route.component key={route.name} route={route} />
        ) : (
          <HeaderLink key={route.name} route={route} />
        )
      ))}
    </div>
  );
}

function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", () => setIsOpen(false));
  }, [router]);

  return (
    <header className={style.container}>
      <button aria-label="open menu" type="button" className={style.mobile_menu_button} onClick={() => setIsOpen(true)}>
        <FA className={style.mobile_menu_icon} size="lg" name="bars" />
      </button>
      {isOpen && <MobileHeaderLinks handleClick={() => setIsOpen(false)} />}
    </header>
  );
}

function DesktopHeader() {
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

export default function Header() {
  if (isMobile) return <MobileHeader />;
  return <DesktopHeader />;
}
