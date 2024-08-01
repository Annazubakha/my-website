import { BurgerMenu, Icon, Logo } from "../index";
import { useWindowSizeHook } from "../../helpers";
import { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const windowSize = useWindowSizeHook().windowSize.innerWidth;
  const toggleBurgerMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="h-[80px] py-[15px] flex items-center justify-between">
        <Logo />
        {windowSize <= 1440 && (
          <button onClick={toggleBurgerMenu}>
            <Icon
              id="burger-menu"
              size={36}
              className="stroke-accent fill-accent hover:fill-accent-hover hover:stroke-accent-hover  focus:fill-accent-hover focus:stroke-accent-hover  transition-colors"
            />
          </button>
        )}
      </header>
      {isMobileMenuOpen && <BurgerMenu toggleBurgerMenu={toggleBurgerMenu} />}
    </>
  );
};
