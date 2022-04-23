import Head from "next/head";
import Link from "next/link";
import commonStyle from "@styles/Common.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Projects() {
  const { t } = useTranslation("projects");

  return (
    <>
      <Head>
        <title>{t("pageTitle")}</title>
      </Head>
      <div className={commonStyle.page_container}>
        <h1 className={commonStyle.page_title}>
          {t("wip")}
        </h1>
        <h2 className={commonStyle.text_center}>
          {t("github")}
          <Link href="https://www.github.com/Pauloo27">
            <a rel="noopener noreferrer" target="_blank">
              {t("here")}
            </a>
          </Link>
        </h2>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "projects"])),
    },
  };
}
