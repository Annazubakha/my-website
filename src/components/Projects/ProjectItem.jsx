import { Modal } from "../index";
import { useModal } from "../../helpers";

export const ProjectItem = ({
  title,
  description,
  done,
  websiteLink,
  repoLink,
  technologies,
  img,
}) => {
  const [isModal, toggleIsModal] = useModal();
  return (
    <>
      <li
        onClick={toggleIsModal}
        className="flex flex-col gap-[10px] w-[100%]  px-[10px] py-[20px] rounded-[20px] custom-shadow bg-gradient-to-t from-[#202226] to-[#2A2E33] hover:scale-105 transition-transform duration-300 md:w-[342px] md:h-[390px] lg:w-[630px] lg:px-[40px] lg:h-[580px] cursor-pointer"
      >
        <div className="lg:flex lg:justify-center">
          <img
            src={img}
            alt="Project photo"
            className="rounded-[20px] w-[315px] h-[194px] lg:w-[550px] lg:h-[340px]"
          />
        </div>
        <h1 className="text-accent font-bold text-[25px] tracking-[-0.03em] lg:text-[30px]">
          {title}
        </h1>
        <p className="text-[16px] lg:text-[20px] tracking-[-0.03em]">
          {description}
        </p>
        <button
          onClick={toggleIsModal}
          className="w-[120px] text-[16px] tracking-[-0.03em]  bg-accent rounded-[12px] py-[5px] hover:bg-accent-hover focus:bg-accent-hover md:mt-auto  lg:text-[20px] lg:py-[10px] lg:w-[160px] lg:rounded-[15px]"
        >
          Read more
        </button>{" "}
      </li>
      {isModal && (
        <Modal
          toggleModal={toggleIsModal}
          technologies={technologies}
          title={title}
          description={description}
          done={done}
          websiteLink={websiteLink}
          repoLink={repoLink}
          img={img}
        />
      )}
    </>
  );
};
