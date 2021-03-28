import cn from "classnames";
import style from "../styles/Home.module.css";
import { isMobile as checkMobile } from "../lib/utils";
import ProjectPreview from "./ProjectPreview";
import {useEffect, useState} from "react";

export default function ProjectsGroup({ group: projects }) {
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    console.log(checkMobile());
    setMobile(checkMobile());
  }, []);
  return (
    <div className={cn(style.projects_group, { [style.projects_group_mobile]: isMobile})} >
      {projects.map((project) => <ProjectPreview project={project} />)}
    </div>
  );
}
