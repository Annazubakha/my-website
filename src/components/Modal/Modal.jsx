import ReactDOM from "react-dom";
import { useEffect } from "react";
import { Icon } from "../index";
import { useIconSizeHook } from "../../helpers";

const modalRoot =
  document.getElementById("modalRoot") || document.createElement("div");
modalRoot.id = "modalRoot";
document.body.appendChild(modalRoot);

export const Modal = ({
  title,
  description,
  done,
  websiteLink,
  repoLink,
  technologies,
  img,
  toggleModal,
}) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.code === "Escape") {
        toggleModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [toggleModal]);

  const handleClickOnBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };
  const iconSize = useIconSizeHook("close");
  return ReactDOM.createPortal(
    <div
      onClick={handleClickOnBackdrop}
      className="z-[1501] bg-burger-menu-bg flex justify-center items-center fixed w-[100vw] h-[100vh] left-0 top-0"
    >
      <div className="relative bg-[#2A2E33] rounded-[20px]  w-[335px] custom-shadow px-[20px] pt-[60px] pb-[20px] md:w-[520px] md:px-[40px] md:pb-[40px] lg:w-[700px]">
        <button
          className="absolute top-[10px] right-[20px] w-[40px] h-[40px] flex items-center justify-center rounded-full bg-burger-menu-bg hover:bg-opacity-60 focus:bg-opacity-60 md:top-[20px] lg:w-[48px] lg:h-[48px]"
          onClick={toggleModal}
        >
          <Icon id="close" size={iconSize} className=" fill-accent" />
        </button>
        <div className="flex flex-col gap-[12px] lg:gap-[20px]">
          <div className="md:flex md:justify-center">
            <img
              src={img}
              alt="Project photo"
              className="rounded-[20px] w-[315px] h-[194px] lg:w-[550px] lg:h-[340px] "
            />
          </div>
          <h1 className="text-accent font-bold text-[25px] tracking-[-0.03em] lg:text-[30px]">
            {title}
          </h1>
          <p className="text-[16px] lg:text-[20px] tracking-[-0.03em]">
            {description}
          </p>
          <ul className="flex flex-wrap gap-[10px]">
            {technologies?.map((tech) => (
              <li key={tech}>
                <Icon id={tech} size={40} />
              </li>
            ))}
          </ul>
          <p className="lg:text-[20px] tracking-[-0.03em]">Done: {done}</p>
          <div className="flex gap-[10px]">
            <a
              className="bg-accent w-[120px] py-[5px]  rounded-[12px] hover:bg-accent-hover focus:bg-accent-hover lg:text-[20px] lg:py-[10px] lg:w-[160px] lg:rounded-[15px] flex justify-center items-center"
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
            <a
              className="bg-accent w-[160px] py-[5px] rounded-[12px] hover:bg-accent-hover focus:bg-accent-hover lg:text-[20px] lg:py-[10px] lg:w-[200px] lg:rounded-[15px] flex justify-center items-center"
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github repository
            </a>
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
};
