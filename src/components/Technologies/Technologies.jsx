import { Icon, Title } from "../index";
import technologiesIcons from "../../data/technologiesIcons.json";

export const Technologies = () => {
  return (
    <section id="technologies">
      <Title>Hard skills</Title>
      <ul className="flex flex-wrap items-center justify-between  gap-[15px]">
        {technologiesIcons?.map((icon) => (
          <li
            key={icon.id}
            className="h-[60px] w-[60px] flex justify-center items-center  rounded-[8px] custom-shadow "
          >
            <Icon id={icon.id} size={40} />
          </li>
        ))}
      </ul>
    </section>
  );
};
