import cn from "classnames";
import style from "@styles/Form.module.css";
import { useTranslation } from "next-i18next";

function FormInputPresenter({ error, label, children }) {
  return (
    <label className={
      cn(style.input_label, { [style.input_error]: error })
    }
    >
      {label}
      {children}
    </label>
  );
}

function FormInputContainer({
  name, displayName, placeholder, store, rows, errors,
}) {
  const { t } = useTranslation();

  const isTextArea = rows !== undefined;
  // eslint-disable-next-line no-param-reassign
  if (!displayName) displayName = name;

  const handleChange = (e) => {
    store(name, e.target.value);
  };

  const inputProps = {
    rows,
    placeholder,
    name,
    className: isTextArea ? style.text_area : style.text_input,
    onChange: handleChange,
  };

  const input = isTextArea ? (
    <textarea {...inputProps} />
  ) : (
    <input {...inputProps} />
  );

  const error = errors?.[name];
  const label = error
    ? `${displayName}: ${t(`error.${error.type}`).replace("{0}", error.extra)}`
    : displayName;

  return <FormInputPresenter error={error} label={label}>{input}</FormInputPresenter>;
}

const FormInput = FormInputContainer;

export default FormInput;
