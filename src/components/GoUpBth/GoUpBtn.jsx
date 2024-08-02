import ScrollToTop from "react-scroll-to-top";
import { Icon } from "../index";
import { useIconSizeHook } from "../../helpers";

export const GoUpBtn = () => {
  const iconSize = useIconSizeHook("arrow-top");
  return (
    <>
      <ScrollToTop
        smooth
        component={
          <Icon id="arrow-top" size={iconSize} className="fill-accent" />
        }
      />
    </>
  );
};
