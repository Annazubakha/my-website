import { Icon } from "../index";

export const BurgerMenu = ({ toggleBurgerMenu }) => {
  return (
    <div className="fixed top-0 left-0 bg-main-bg w-full h-full p-[20px] text-[16px]  tracking-[-0.03em] uppercase font-medium">
      <button
        className="absolute top-[20px] right-[20px] w-[40px] h-[40px] flex items-center justify-center rounded-full bg-burger-menu-bg  hover:bg-opacity-60 focus:bg-opacity-60"
        onClick={toggleBurgerMenu}
      >
        <Icon id="close" size={25} className=" fill-accent" />
      </button>
      <ul>
        <li>Home</li>
        <li>About me</li>
        <li>Technologies</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <p className="mb-[20px]"> Get in touch with me</p>
      <ul className="flex items-center gap-[20px]">
        <li>
          <a
            href="https://www.linkedin.com/in/anna-zubakha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon id="linkedin" size={32} />
          </a>
        </li>
        <li>
          {" "}
          <a
            href="https://github.com/Annazubakha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon id="github" size={32} />
          </a>
        </li>
        <li>
          {" "}
          <a
            href="https://wa.me/380982417614"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon id="whatsapp" size={32} />
          </a>
        </li>
      </ul>
    </div>
  );
};
