import { Icon, Title } from "../index";
import languages from "../../data/languages.json";
import { useIconSizeHook } from "../../helpers";

export const Languages = () => {
  const iconSize = useIconSizeHook("earth");
  return (
    <section id="languages">
      <Title>Languages</Title>
      <ul className="flex flex-col gap-[15px] lg:flex-row lg:flex-wrap lg:gap-[20px] lg:justify-center ">
        {languages.map((language, index) => (
          <li
            key={index}
            className="text-[20px] tracking-[-0.03em] flex items-center gap-[10px] capitalize bg-[#202226] rounded-[14px] custom-shadow-item  lg:w-[380px]  lg:text-[22px] lg:rounded-[20px]"
          >
            <div className="rounded-full h-[40px] w-[40px] bg-white flex items-center justify-center lg:h-[48px] lg:w-[48px] ">
              <Icon id="earth" size={iconSize} className="fill-accent" />
            </div>
            <p>
              {language.name} - <span>{language.level}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
