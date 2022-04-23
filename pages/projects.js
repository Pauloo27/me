import Head from "next/head";
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
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["projects"])),
    },
  };
}
