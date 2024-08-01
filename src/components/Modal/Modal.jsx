import ReactDOM from "react-dom";
import { useEffect } from "react";

import { Icon } from "../index";

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

  return ReactDOM.createPortal(
    <div
      onClick={handleClickOnBackdrop}
      className="z-[1501] bg-burger-menu-bg flex justify-center items-center fixed w-[100vw] h-[100vh] left-0 top-0"
    >
      <div className="relative bg-[#2A2E33] rounded-[20px]  w-[335px] custom-shadow px-[20px] pt-[60px] pb-[20px]">
        <button
          className="absolute top-[10px] right-[20px] w-[40px] h-[40px] flex items-center justify-center rounded-full bg-burger-menu-bg hover:bg-opacity-60 focus:bg-opacity-60"
          onClick={toggleModal}
        >
          <Icon id="close" size={25} className=" fill-accent" />
        </button>
        <div className="flex flex-col gap-[12px] ">
          <img
            src={img}
            alt="Project photo"
            height="496px"
            width="315px"
            className="rounded-[20px]"
          />
          <h1 className="text-accent font-bold text-[25px] tracking-[-0.03em]">
            {title}
          </h1>
          <p className="text-[16px]">{description}</p>
          <ul className="flex flex-wrap gap-[10px]">
            {technologies?.map((tech) => (
              <li key={tech}>
                <Icon id={tech} size={40} />
              </li>
            ))}
          </ul>
          <p>Done: {done}</p>
          <div className="flex gap-[10px]">
            <a
              className="bg-accent px-[10px] py-[5px]  rounded-[12px] hover:bg-accent-hover focus:bg-accent-hover"
              to={websiteLink}
            >
              Website
            </a>
            <a
              className="bg-accent px-[10px] py-[5px] rounded-[12px] hover:bg-accent-hover focus:bg-accent-hover"
              to={repoLink}
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
