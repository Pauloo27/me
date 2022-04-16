import { useEffect, useState } from "react";
import cn from "classnames";
import style from "@styles/Form.module.css";

function FormSubmitPresenter({ enabled, text, submitted }) {
  return (
    <button
      disabled={!enabled}
      type="submit"
      className={cn(style.submit, { [style.sent]: submitted })}
    >
      {text}
    </button>
  );
}

function FormSubmitContainer({
  errors, submitted, submitText, submittedText, disabledText,
}) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(errors === undefined && !submitted);
  }, [errors, submitted]);

  let text = enabled ? submitText : disabledText;
  if (submitted) text = submittedText;

  return <FormSubmitPresenter enabled={enabled} text={text} submitted={submitted} />;
}

const FormSubmit = FormSubmitContainer;

export default FormSubmit;
