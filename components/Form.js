import style from "@styles/Form.module.css";

export default function Form({ onSubmit, children }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      {children}
    </form>
  );
}
