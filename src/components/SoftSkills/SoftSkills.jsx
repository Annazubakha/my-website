import { Icon, Title } from "../index";
import softSkills from "../../data/softSkills.json";

export const SoftSkills = () => {
  return (
    <section id="soft">
      <Title>Soft skills</Title>
      <ul className="flex flex-col gap-[15px]">
        {softSkills.map((skill, index) => (
          <li
            key={index}
            className="text-[20px] flex items-center gap-[10px] capitalize bg-[#202226] rounded-[14px] custom-shadow-item tracking-[-0.03em]"
          >
            <div className=" rounded-full h-[40px] w-[40px] bg-white flex items-center justify-center">
              <Icon id="puzzle" size={22} className=" stroke-accent" />
            </div>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};
