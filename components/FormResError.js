import style from "../styles/Form.module.css";

export default function FormResError({ error }) {
  if (error === null || error === undefined) return null;
  return (
    <div className={style.error_container}>
      <h4>
        Something went wrong:
        {" "}
        {error}
      </h4>
    </div>
  );
}
