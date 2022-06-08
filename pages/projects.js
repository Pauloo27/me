import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Carousel from '@components/Carousel'
import projects from '@lib/projects'
import styles from '@styles/Projects.module.css'

export default function Projects() {
  const { t } = useTranslation('projects')
  const items = projects.filter((item) => item.highlighted)

  return (
    <>
      <Head>
        <title>{t('pageTitle')}</title>
      </Head>
      <h1 className={styles.pageTitle}>{t('pageTitle')}</h1>
      <Carousel items={items} />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'projects'])),
    },
  }
}
