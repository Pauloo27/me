import style from "../styles/Form.module.css";

export default function FormGroup({ children }) {
  return (
    <div className={style.form_group}>
      {children}
    </div>
  );
}
