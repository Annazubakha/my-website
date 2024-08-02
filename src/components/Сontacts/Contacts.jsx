import { Icon } from "../index";
import { useIconSizeHook } from "../../helpers";

export const Contacts = () => {
  const iconSizeLinkedin = useIconSizeHook("linkedin");
  const iconSizeGithub = useIconSizeHook("github");
  const iconSizeWhatsapp = useIconSizeHook("whatsapp");
  const iconSizeGmail = useIconSizeHook("gmail");
  return (
    <>
      <ul className="flex items-center gap-[20px]">
        <li>
          <a
            href="https://www.linkedin.com/in/anna-zubakha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon id="linkedin" size={iconSizeLinkedin} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Annazubakha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon id="github" size={iconSizeGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/380982417614"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon id="whatsapp" size={iconSizeWhatsapp} />
          </a>
        </li>
        <li>
          <a
            href="mailto:annazubakha13@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon id="gmail" size={iconSizeGmail} />
          </a>
        </li>
      </ul>
    </>
  );
};
