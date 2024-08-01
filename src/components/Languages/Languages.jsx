import { Icon, Title } from "../index";
import languages from "../../data/languages.json";

export const Languages = () => {
  return (
    <section id="languages">
      <Title>Languages</Title>
      <ul className="flex flex-col    gap-[15px]">
        {languages.map((language, index) => (
          <li
            key={index}
            className="text-[20px] tracking-[-0.03em] flex items-center gap-[10px] capitalize bg-[#202226] rounded-[14px] custom-shadow-item "
          >
            <div className="rounded-full h-[40px] w-[40px] bg-white flex items-center justify-center ">
              <Icon id="earth" size={22} className="fill-accent" />
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
