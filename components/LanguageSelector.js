import { useEffect } from "react";
import FA from "react-fontawesome";
import headerStyle from "@styles/Header.module.css";
import style from "@styles/LanguageSelector.module.css";
import cn from "classnames";
import useStore from "@store/global";
import shallow from "zustand/shallow";

const supportedLanguages = [{ name: "en", displayName: "English" }, { name: "pt", displayName: "Português" }];

function LanguageSelectorPresenter({ language, handleChange }) {
  return (
    <div className={cn(headerStyle.item, style.selector_container)}>
      <FA name="language" className={style.selector_icon} />
      <select value={language} onChange={handleChange} className={style.selector_select}>
        {
          supportedLanguages.map((lang) => (
            <option key={lang.name} value={lang.name}>
              {lang.displayName}
            </option>
          ))
        }
      </select>
    </div>
  );
}

function LanguageSelectorContainer() {
  const [language, setLanguage] = useStore((state) => [state.language, state.setLanguage], shallow);

  // load the language, first try to load from local storage, then from the browser
  // (if we support it), fallback to english.
  useEffect(() => {
    let selectedLanguage = localStorage.getItem("language");
    if (!selectedLanguage) {
      const browserLanguage = navigator.language.split("-")[0];
      selectedLanguage = supportedLanguages.find((lang) => lang.name === browserLanguage)?.name ?? "en";
    }

    setLanguage(selectedLanguage);
  }, []);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setLanguage(newValue);
    // TODO: use a zustand subscriber (i tried but i've failed)
    localStorage.setItem("language", newValue);
  };

  return <LanguageSelectorPresenter language={language} handleChange={handleChange} />;
}

const LanguageSelector = LanguageSelectorContainer;

export default LanguageSelector;
