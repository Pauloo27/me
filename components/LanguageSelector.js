import FA from "react-fontawesome";
import headerStyle from "@styles/Header.module.css";
import style from "@styles/LanguageSelector.module.css";
import cn from "classnames";

export default function LanguageSelector() {
  return (
    <div className={cn(headerStyle.item, style.selector_container)}>
      <FA name="language" className={style.selector_icon} />
      <select className={style.selector_select}>
        <option value="en">English</option>
        <option value="pt">Português</option>
      </select>
    </div>
  );
}
