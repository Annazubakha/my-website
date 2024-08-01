import { Icon } from "../index";

export const Logo = ({ scrollToTop }) => {
  return (
    <button
      onClick={scrollToTop}
      className="flex items-center gap-[10px] text-[20px] tracking-[-0.03em] "
    >
      <Icon id="logo" size={36} className=" fill-accent" />
      <p className="text-main-color">Anna Zubakha</p>
    </button>
  );
};
