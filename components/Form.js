import style from "@styles/Form.module.css";

function FormPresenter({ handleSubmit, children }) {
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      {children}
    </form>
  );
}

function FormContainer({ onSubmit, children }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return <FormPresenter handleSubmit={handleSubmit}>{children}</FormPresenter>;
}

const Form = FormContainer;

export default Form;
