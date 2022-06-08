import Link from 'next/link'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import projects from '@lib/projects'
import styles from '@styles/404.module.css'
import commonStyle from '@styles/Common.module.css'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'

function Error404Presenter({ randomProject }) {
  const { t } = useTranslation('404')

  return (
    <>
      <Head>
        <title>{t('pageTitle')}</title>
      </Head>
      <div className={commonStyle.page_container}>
        <div className={styles.error_container}>
          <h1 className={styles.error_code}>404</h1>
          <h3 className={styles.error_message}>{t('pageNotFound')}</h3>
        </div>
        <div className={styles.gifWrapper}>
          <Image
            src="/404.gif"
            alt="GIF of a confused man"
            width="250"
            height="300"
          />
        </div>
        <h3>{t('usefulLinks')}</h3>
        <Link href="/">
          <a rel="noopener noreferrer">{t('usefulLinks.home')}</a>
        </Link>
        <Link href="/projects">
          <a rel="noopener noreferrer">{t('usefulLinks.projects')}</a>
        </Link>
        <Link href={randomProject.source}>
          <a rel="noopener noreferrer" target="_blank">{t('usefulLinks.randomProject')}</a>
        </Link>
      </div>
    </>
  )
}

function Error404Container() {
  const [randomProject, setRandomProject] = useState(projects[0])

  useEffect(() => {
    setRandomProject(projects[Math.floor(Math.random() * projects.length)])
  }, [])

  return <Error404Presenter randomProject={randomProject} />
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', '404'])),
    },
  }
}

const Error404 = Error404Container
export default Error404
