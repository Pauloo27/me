import Head from "next/head";
import { useState, useEffect } from "react";
import cn from "classnames";
import Form from "@components/Form";
import FormSubmit from "@components/FormSubmit";
import FormInput from "@components/FormInput";
import FormGroup from "@components/FormGroup";
import FormResError from "@components/FormResError";
import commonStyle from "@styles/Common.module.css";
import { validate, contactConstraint } from "@lib/validate";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

function ContactPresenter({
  email, validationErrors, onSubmit, resErrors, updateStore,
}) {
  const { t } = useTranslation("contact");
  return (
    <>
      <Head>
        <title>{t("pageTitle")}</title>
      </Head>
      <div className={commonStyle.page_container}>
        <h1 className={commonStyle.page_title}>
          {t("doYouWant")}
        </h1>
        <h2>
          {t("messageMe")}
        </h2>
        <h3>
          {t("myEmail")}
          {" "}
          <span className={cn({ [commonStyle.text_blur]: !email })}>
            {email ?? "00000!000"}
          </span>
        </h3>
        <h3>{t("orThisForm")}</h3>
        <Form onSubmit={onSubmit}>
          <FormResError error={resErrors} />
          <FormGroup>
            <FormInput
              errors={validationErrors}
              store={updateStore}
              name="name"
              displayName={t("name.label")}
              placeholder={t("name.placeholder")}
            />
            <FormInput
              errors={validationErrors}
              store={updateStore}
              name="email"
              displayName={t("email.label")}
              placeholder={t("email.placeholder")}
            />
          </FormGroup>
          <FormInput
            errors={validationErrors}
            store={updateStore}
            name="subject"
            displayName={t("subject.label")}
            placeholder={t("subject.placeholder")}
          />
          <FormInput
            errors={validationErrors}
            rows={5}
            store={updateStore}
            name="message"
            displayName={t("message.label")}
            placeholder={t("message.placeholder")}
          />
          <FormSubmit
            errors={validationErrors}
            submitted={resErrors === null}
            submittedText={t("submitted")}
            submitText={t("submit")}
            disabledText={t("fillBeforeSubmit")}
          />
        </Form>
      </div>
    </>
  );
}

function ContactContainer() {
  const [email, setEmail] = useState(undefined);

  useEffect(() => {
    fetch("/api/email").then((res) => res.json())
      .then(({ user, domain }) => setEmail(`${user}@${domain}`));
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
    <ContactPresenter
      email={email}
      validationErrors={validationErrors}
      onSubmit={onSubmit}
      resErrors={resErrors}
      updateStore={updateStore}
    />
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "contact"])),
    },
  };
}

const Contact = ContactContainer;

export default Contact;
