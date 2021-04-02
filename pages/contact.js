import style from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={style.container}>
      <h1>Contact</h1>
      <h2>Page under construction...</h2>
      <img
        src="/construction.gif"
        className={style.gif}
        alt="GIF of a confused man"
      />
    </div>
  );
}
