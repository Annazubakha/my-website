import { Icon, Contacts } from "../index";

export const BurgerMenu = ({ toggleBurgerMenu }) => {
  return (
    <div className="z-20 fixed top-0 left-0 bg-main-bg w-full h-full p-[20px]   font-medium flex flex-col gap-[20px] pt-[200px] pb-[40px] justify-between items-center">
      <button
        className="absolute top-[20px] right-[20px] w-[40px] h-[40px] flex items-center justify-center rounded-full bg-burger-menu-bg  hover:bg-opacity-60 focus:bg-opacity-60"
        onClick={toggleBurgerMenu}
      >
        <Icon id="close" size={25} className=" fill-accent" />
      </button>
      <nav>
        <ul className="flex flex-col gap-[10px] text-[20px]  tracking-[-0.03em] uppercase">
          <li>
            <a
              href="#aboutme"
              className="flex gap-[10px] hover:text-accent focus:text-accent"
            >
              {" "}
              <Icon id="female" size={32} className="stroke-accent" />
              About me
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="flex gap-[10px] hover:text-accent focus:text-accent"
            >
              {" "}
              <Icon id="hat" size={32} className="fill-accent" /> Education
            </a>
          </li>
          <li>
            <a
              href="#languages"
              className="flex gap-[10px] hover:text-accent focus:text-accent"
            >
              {" "}
              <Icon id="earth" size={32} className="fill-accent" /> Languages
            </a>
          </li>
          <li>
            <a
              href="#technologies"
              className="flex gap-[10px] hover:text-accent focus:text-accent"
            >
              {" "}
              <Icon id="puzzle" size={32} className="stroke-accent" /> Hard
              skills
            </a>
          </li>
          <li>
            <a
              href="#soft"
              className="flex gap-[10px] hover:text-accent focus:text-accent"
            >
              {" "}
              <Icon id="handshake" size={32} className="fill-accent" /> Soft
              skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="flex gap-[10px] hover:text-accent focus:text-accent"
            >
              {" "}
              <Icon id="code" size={32} className="fill-accent" /> My projects
            </a>
          </li>
        </ul>
      </nav>
      <Contacts />
    </div>
  );
};
