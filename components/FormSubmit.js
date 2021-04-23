import {useEffect, useState} from "react";
import style from "../styles/Form.module.css";

export default function FormSubmit({ errors }) {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    setEnabled(errors === undefined);
  }, [errors]);
  return <button disabled={!enabled} type="submit" className={style.submit}>{enabled ? "Submit" : "Fill the form before submitting"}</button>;
}
