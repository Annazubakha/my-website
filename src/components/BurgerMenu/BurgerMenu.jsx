import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Icon, Contacts } from "../index";

export const BurgerMenu = ({ toggleBurgerMenu }) => {
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  return (
    <motion.div
      variants={menuVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="z-20 fixed top-0 left-0 bg-main-bg w-full h-full p-[20px] font-medium flex flex-col gap-[20px] pt-[200px] pb-[40px] justify-between items-center"
    >
      <button
        className="absolute top-[20px] right-[20px] w-[40px] h-[40px] flex items-center justify-center rounded-full bg-burger-menu-bg  hover:bg-opacity-60 focus:bg-opacity-60"
        onClick={toggleBurgerMenu}
      >
        <Icon id="close" size={25} className=" fill-accent" />
      </button>

      <ul className="flex flex-col gap-[10px] text-[20px]  tracking-[-0.03em] uppercase">
        <li>
          <Link
            to="aboutme"
            spy={true}
            smooth={true}
            offset={-120}
            duration={2000}
            className="flex gap-[10px] items-center hover:text-accent focus:text-accent"
            onClick={toggleBurgerMenu}
          >
            <Icon id="female" size={32} className="stroke-accent" />
            About me
          </Link>
        </li>
        <li>
          <Link
            to="education"
            spy={true}
            smooth={true}
            offset={-120}
            duration={2000}
            className="flex gap-[10px] items-center hover:text-accent focus:text-accent"
            onClick={toggleBurgerMenu}
          >
            <Icon id="hat" size={32} className="fill-accent" />
            Education
          </Link>
        </li>
        <li>
          <Link
            to="languages"
            spy={true}
            smooth={true}
            offset={-120}
            duration={2000}
            className="flex gap-[10px] items-center hover:text-accent focus:text-accent"
            onClick={toggleBurgerMenu}
          >
            <Icon id="earth" size={32} className="fill-accent" />
            Languages
          </Link>
        </li>
        <li>
          <Link
            to="technologies"
            spy={true}
            smooth={true}
            offset={-120}
            duration={2000}
            className="flex gap-[10px] items-center hover:text-accent focus:text-accent"
            onClick={toggleBurgerMenu}
          >
            <Icon id="puzzle" size={32} className="stroke-accent" />
            Hard skills
          </Link>
        </li>
        <li>
          <Link
            to="soft"
            spy={true}
            smooth={true}
            offset={-120}
            duration={2000}
            className="flex gap-[10px] items-center hover:text-accent focus:text-accent"
            onClick={toggleBurgerMenu}
          >
            <Icon id="handshake" size={32} className="fill-accent" />
            Soft skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-120}
            duration={2000}
            className="flex gap-[10px] items-center hover:text-accent focus:text-accent"
            onClick={toggleBurgerMenu}
          >
            <Icon id="code" size={32} className="fill-accent" /> My projects
          </Link>
        </li>
      </ul>
      <Contacts />
    </motion.div>
  );
};
