import Head from "next/head";
import { useState, useEffect } from "react";
import { validate, contactConstraint } from "../lib/validate";
import Form from "../components/Form";
import FormSubmit from "../components/FormSubmit";
import FormInput from "../components/FormInput";
import FormGroup from "../components/FormGroup";
import FormResError from "../components/FormResError";
import style from "../styles/Contact.module.css";

export default function Contact() {
  const [email, setEmail] = useState("(hidden... wait a little)");

  useEffect(() => {
    const fetchEmail = () => fetch("/api/email").then((res) => res.json())
      .then(({ user, domain }) => setEmail(`${user}@${domain}`));

    setTimeout(fetchEmail, 1000);
  }, []);

  const [validationErrors, setValidationErrors] = useState(undefined);
  const [store, setStore] = useState({});
  // undefined == not sent
  // null = sent, no errors
  // everything else = errors
  const [resErrors, setResErrors] = useState(undefined);

  const updateStore = (key, value) => {
    const newStore = { ...store, [key]: value };
    setStore(newStore);
  };

  // Validation (called every time store is updated)
  useEffect(() => {
    setValidationErrors(validate(store, contactConstraint));
  }, [store, setValidationErrors]);

  const onSubmit = () => {
    if (validate(store, contactConstraint) !== undefined) return;
    fetch("/api/contact", { method: "POST", body: JSON.stringify(store) })
      .then((res) => {
        if (res.status === 200) setResErrors(null);
        else res.json().then((json) => setResErrors(json.error));
      });
  };

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className={style.content_container}>
        <h1 className={style.text_center}>
          Do you want to contact me? You can send me a message in...
        </h1>
        <h3 className={style.text_center}>
          My email:
          {" "}
          {email}
        </h3>
        <h3 className={style.text_center}>Or this form:</h3>
        <Form onSubmit={onSubmit}>
          <FormResError error={resErrors} />
          <FormGroup>
            <FormInput errors={validationErrors} store={updateStore} name="name" placeholder="Your name" />
            <FormInput errors={validationErrors} store={updateStore} name="email" placeholder="Your email" />
          </FormGroup>
          <FormInput errors={validationErrors} store={updateStore} name="subject" placeholder="Subject" />
          <FormInput errors={validationErrors} rows={5} store={updateStore} name="message" placeholder="Message" />
          <FormSubmit errors={validationErrors} sent={resErrors === null} />
        </Form>
      </div>
    </>
  );
}
