import React from "react";
import Link from "next/link";
import style from "../styles/ProjectPreview.module.css";

export default function ProjectPreview({ project }) {
  return (
    <div className={style.container}>
      <span className={style.name}>{project.name}</span>
      <span className={style.description}>{project.description}</span>
      <img className={style.thumbnail} src={project.thumbnail} alt="Thumbnail" />
      <div className={style.links}>
        <Link href={project.source}>
          <a target="_blank" rel="noopener noreferrer">Source</a>
        </Link>
        <div>
          <span>Made with:</span>
          {project.madeWith.map((i) => (
            <span key={i.name} className={style.technology}>
              {i.name}
            </span>
          ))}
        </div>
        {project.preview === undefined ? null
          : (
            <Link href={project.preview}>
              <a target="_blank" rel="noopener noreferrer">Preview</a>
            </Link>
          )}
      </div>
    </div>
  );
}
