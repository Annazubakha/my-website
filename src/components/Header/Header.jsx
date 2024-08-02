import { useState } from "react";
import { Link } from "react-scroll";
import { AnimatePresence } from "framer-motion";
import { Logo, Icon, BurgerMenu } from "../index";
import { useWindowSizeHook } from "../../helpers";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const windowSize = useWindowSizeHook().windowSize.innerWidth;
  const toggleBurgerMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <header className="fixed top-0 right-0 left-0 h-[80px] w-full container py-[15px] flex items-center justify-between bg-main-bg z-10 lg:h-[120px]  ">
      <Logo scrollToTop={scrollToTop} />
      {windowSize < 1440 && (
        <button onClick={toggleBurgerMenu}>
          <Icon
            id="burger-menu"
            size={36}
            className="stroke-accent fill-accent hover:fill-accent-hover hover:stroke-accent-hover  focus:fill-accent-hover focus:stroke-accent-hover  transition-colors"
          />
        </button>
      )}
      {windowSize >= 1440 && (
        <nav>
          <ul className="flex gap-[10px] text-[20px]  tracking-[-0.03em] uppercase lg:gap-[14px] ">
            <li className="item">
              <Link
                to="aboutme"
                spy={true}
                smooth={true}
                offset={-180}
                duration={500}
                className="hover:text-accent focus:text-accent"
              >
                About me
              </Link>
            </li>
            <li className="item">
              <Link
                to="education"
                spy={true}
                smooth={true}
                offset={-180}
                duration={2000}
                className="hover:text-accent focus:text-accent"
              >
                Education
              </Link>
            </li>
            <li className="item">
              <Link
                to="languages"
                spy={true}
                smooth={true}
                offset={-180}
                duration={2000}
                className="hover:text-accent focus:text-accent"
              >
                Languages
              </Link>
            </li>
            <li className="item">
              <Link
                to="technologies"
                spy={true}
                smooth={true}
                offset={-180}
                duration={2000}
                className="hover:text-accent focus:text-accent"
              >
                Hard skills
              </Link>
            </li>
            <li className="item">
              <Link
                to="soft"
                spy={true}
                smooth={true}
                offset={-180}
                duration={2000}
                className="hover:text-accent focus:text-accent"
              >
                Soft skills
              </Link>
            </li>
            <li className="item">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-180}
                duration={2000}
                className="hover:text-accent focus:text-accent"
              >
                My projects
              </Link>
            </li>
            <li>
              <Link
                to="contacts"
                spy={true}
                smooth={true}
                offset={-180}
                duration={2000}
                className="hover:text-accent focus:text-accent"
              >
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      )}
      <AnimatePresence>
        {isMobileMenuOpen && <BurgerMenu toggleBurgerMenu={toggleBurgerMenu} />}
      </AnimatePresence>
    </header>
  );
};
