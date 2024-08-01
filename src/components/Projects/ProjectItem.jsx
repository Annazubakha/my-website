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
      <li className="flex flex-col gap-[10px] w-[100%]  px-[10px] py-[20px] rounded-[20px] custom-shadow bg-gradient-to-t from-[#202226] to-[#2A2E33]">
        <img
          src={img}
          alt="Project photo"
          className="rounded-[20px] "
          height="496px"
          width="315px"
        />
        <h1 className="text-accent font-bold text-[25px] tracking-[-0.03em]">
          {title}
        </h1>
        <p className="text-[16px]">{description}</p>
        <button
          onClick={toggleIsModal}
          className="w-[120px] text-[16px] bg-accent rounded-[12px] py-[5px] hover:bg-accent-hover focus:bg-accent-hover "
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
