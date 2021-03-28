import cn from "classnames";
import { useEffect, useState } from "react";
import style from "../styles/Home.module.css";
import { isMobile as checkMobile } from "../lib/utils";
import ProjectPreview from "./ProjectPreview";

export default function ProjectsGroup({ group: projects }) {
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(checkMobile());
  }, []);
  return (
    <div className={cn(style.projects_group, { [style.projects_group_mobile]: isMobile })}>
      {projects.map((project) => <ProjectPreview project={project} />)}
    </div>
  );
}
