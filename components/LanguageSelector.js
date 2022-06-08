import { useEffect } from 'react'
import FA from 'react-fontawesome'
import headerStyle from '@styles/Header.module.css'
import styles from '@styles/LanguageSelector.module.css'
import cn from 'classnames'
import useStore from '@store/global'
import shallow from 'zustand/shallow'
import { useRouter } from 'next/router'

const supportedLanguages = [{ name: 'en', displayName: 'English' }, { name: 'pt', displayName: 'Português' }]

function LanguageSelectorPresenter({ language, handleChange }) {
  return (
    <div className={cn(headerStyle.item, styles.selector_container)}>
      <FA name="language" className={styles.selector_icon} />
      <select value={language} onChange={handleChange} className={styles.selector_select}>
        {
          supportedLanguages.map((lang) => (
            <option key={lang.name} value={lang.name}>
              {lang.displayName}
            </option>
          ))
        }
      </select>
    </div>
  )
}

function LanguageSelectorContainer() {
  const [language, setLanguage] = useStore((state) => [state.language, state.setLanguage], shallow)
  const router = useRouter()

  // subscribe to the lang change...
  useEffect(() => useStore.subscribe((state) => {
    localStorage.setItem('language', state.language)
    if (router.locale !== state.language)
      router.replace(router.pathname, router.pathname, { locale: state.language })
  }, (state) => state.language), [router])

  // load the language, first try to load from local storage, then from the browser
  // (if we support it), fallback to english.
  useEffect(() => {
    let selectedLanguage = localStorage.getItem('language')
    if (!selectedLanguage) {
      const browserLanguage = navigator.language.split('-')[0]
      selectedLanguage = supportedLanguages.find((lang) => lang.name === browserLanguage)?.name ?? 'en'
    }

    setLanguage(selectedLanguage)
  }, [setLanguage])

  const handleChange = (e) => {
    const newValue = e.target.value
    setLanguage(newValue)
  }

  return <LanguageSelectorPresenter language={language} handleChange={handleChange} />
}

const LanguageSelector = LanguageSelectorContainer

export default LanguageSelector
