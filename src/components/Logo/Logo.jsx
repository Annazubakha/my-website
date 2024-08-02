import { Icon } from "../index";
import { useIconSizeHook } from "../../helpers";

export const Logo = ({ scrollToTop }) => {
  const iconSize = useIconSizeHook("logo");
  return (
    <button
      onClick={scrollToTop}
      className="flex items-center gap-[10px] text-[20px] tracking-[-0.03em] lg:text-[25px] "
    >
      <Icon id="logo" size={iconSize} className=" fill-accent" />
      <p className="text-main-color">Anna Zubakha</p>
    </button>
  );
};
