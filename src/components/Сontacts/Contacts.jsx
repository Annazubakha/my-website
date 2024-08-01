import { Icon } from "../index";

export const Contacts = () => {
  return (
    <>
      <ul className="flex items-center gap-[20px]">
        <li>
          <a
            href="https://www.linkedin.com/in/anna-zubakha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon id="linkedin" size={32} />
          </a>
        </li>
        <li>
          {" "}
          <a
            href="https://github.com/Annazubakha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon id="github" size={32} />
          </a>
        </li>
        <li>
          {" "}
          <a
            href="https://wa.me/380982417614"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon id="whatsapp" size={32} />
          </a>
        </li>
        <li>
          {" "}
          <a
            href="mailto:annazubakha13@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon id="gmail" size={32} />
          </a>
        </li>
      </ul>
    </>
  );
};
