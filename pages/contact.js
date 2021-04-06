import Head from "next/head";
import style from "../styles/Contact.module.css";

export default function Contact() {
  const onSubmit = (event) => {
    event.preventDefault();
    // TODO: api
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
        <h3 className={style.text_center}>My email: (hidden)</h3>
        <h3 className={style.text_center}>Or this form:</h3>
        <form onSubmit={onSubmit} className={style.form}>
          <div className={style.form_group}>
            <input className={style.text_entry} placeholder="Your full name" />
            <input className={style.text_entry} placeholder="Your best e-mail" />
          </div>
          <input className={style.text_entry} placeholder="Subject" />
          <textarea className={style.message} placeholder="Message" rows={5} />
          <button className={style.submit} type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
