import style from "../styles/Form.module.css";

export default function FormInput({ name, placeholder, store, rows }) {
  const handleChange = (e) => {
    store(name, e.target.value);
  };

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
}
