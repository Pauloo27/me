import { useEffect, useState } from "react";
import cn from "classnames";
import style from "@styles/Form.module.css";

export default function FormSubmit({ errors, sent }) {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    setEnabled(errors === undefined && !sent);
  }, [errors, sent]);
  let text;
  if (sent) text = "Message sent";
  else text = enabled ? "Submit" : "Fill the form before submitting";
  return (
    <button
      disabled={!enabled}
      type="submit"
      className={cn(style.submit, { [style.sent]: sent })}
    >
      {text}
    </button>
  );
}
