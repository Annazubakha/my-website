import ScrollToTop from "react-scroll-to-top";
import { Icon } from "../index";

export const GoUpBtn = () => {
  return (
    <>
      <ScrollToTop
        smooth
        component={<Icon id="arrow-top" size={24} className="fill-accent" />}
      />
    </>
  );
};
