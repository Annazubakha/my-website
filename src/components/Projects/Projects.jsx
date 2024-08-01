import { ProjectItem, Title } from "../index";
import projects from "../../data/projects.json";

export const Projects = () => {
  return (
    <section>
      <Title>My projects</Title>
      <ul className="flex flex-wrap items-center justify-between  gap-[20px]">
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
