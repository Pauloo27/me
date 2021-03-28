import style from "../styles/ProjectPreview.module.css";

export default function ProjectPreview({ project }) {
  return (
    <div className={style.container}>
      <span className={style.name}>{project.name}</span>
      <span className={style.description}>{project.description}</span>
      <img className={style.thumbnail} src={project.thumbnail} alt="Thumbnail" />
    </div>
  );
}
