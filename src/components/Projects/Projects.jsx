import { ProjectItem, Title } from "../index";
import projects from "../../data/projects.json";

export const Projects = () => {
  return (
    <section id="projects">
      <Title>My projects</Title>
      <ul className="flex flex-wrap items-center justify-between  gap-[20px] md:flex-row md:flex-wrap ">
        {projects?.map((project) => (
          <ProjectItem
            key={project.id}
            className="p-[10px] rounded-[8px] custom-shadow"
            {...project}
          />
        ))}
      </ul>
    </section>
  );
};
