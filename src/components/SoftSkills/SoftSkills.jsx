import { Icon, Title } from "../index";
import softSkills from "../../data/softSkills.json";
import { useIconSizeHook } from "../../helpers";

export const SoftSkills = () => {
  const iconSize = useIconSizeHook("puzzle");
  return (
    <section id="soft">
      <Title>Soft skills</Title>
      <ul className="flex flex-col gap-[15px] md:flex-row md:flex-wrap lg:gap-[20px] lg:justify-center  ">
        {softSkills.map((skill, index) => (
          <li
            key={index}
            className="text-[20px] flex items-center gap-[10px] capitalize bg-[#202226] rounded-[14px] custom-shadow-item tracking-[-0.03em] md:w-[344.5px]  lg:text-[22px] lg:rounded-[20px]"
          >
            <div className=" rounded-full h-[40px] w-[40px] bg-white flex items-center justify-center lg:h-[48px] lg:w-[48px]">
              <Icon id="puzzle" size={iconSize} className=" stroke-accent" />
            </div>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};
