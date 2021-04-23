import Head from "next/head";
import { validate, contactConstraint } from "../lib/validate";
import { useState, useEffect } from "react";
import Form from "../components/Form";
import FormSubmit from "../components/FormSubmit";
import FormInput from "../components/FormInput";
import FormGroup from "../components/FormGroup";
import style from "../styles/Contact.module.css";

export default function Contact() {
  const [email, setEmail] = useState("(hidden... wait a little)");

  useEffect(() => {
    const fetchEmail = () => fetch("/api/email").then((res) => res.json())
      .then(({ user, domain }) => setEmail(`${user}@${domain}`));

    setTimeout(fetchEmail, 1000);
  }, []);

  const [validatonErrors, setValidationErrors] = useState(undefined);
  const [store, setStore] = useState({});

  const updateStore = (key, value) => {
    const newStore = { ...store, [key]: value };
    setStore(newStore);
  };

  // Validation (called every time store is updated)
  useEffect(() => {
    setValidationErrors(validate(store, contactConstraint));
  }, [store, setValidationErrors]);

  const onSubmit = (event) => {
    // TODO: validate
    // TODO: call api
  };

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className={style.container}>
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
          <FormGroup>
            <FormInput errors={validatonErrors} store={updateStore} name="name" placeholder="Your name" />
            <FormInput errors={validatonErrors} store={updateStore} name="email" placeholder="Your email" />
          </FormGroup>
          <FormInput errors={validatonErrors} store={updateStore} name="subject" placeholder="Subject" />
          <FormInput errors={validatonErrors} rows={5} store={updateStore} name="message" placeholder="Message" />
          <FormSubmit />
        </Form>
      </div>
    </>
  );
}
