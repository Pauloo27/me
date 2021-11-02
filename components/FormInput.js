import cn from "classnames";
import style from "../styles/Form.module.css";

export default function FormInput({
  name, placeholder, store, rows, errors,
}) {
  const handleChange = (e) => {
    store(name, e.target.value);
  };

  const error = errors?.[name];

  const getInput = () => {
    if (rows !== undefined && rows >= 2)
      return (
        <textarea
          rows={rows}
          className={style.text_area}
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
        />
      );

    return (
      <input
        className={style.text_input}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
      />
    );
  };

  const label = error ? `${name}: ${error}` : name;

  return (
    <div className={style.input_container}>
      <span className={
        cn(style.input_label, { [style.input_error]: error })
      }
      >
        {label}
      </span>
      {getInput()}
    </div>
  );
}
