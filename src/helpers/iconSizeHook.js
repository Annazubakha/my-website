import { useWindowSizeHook } from "./index";

export const useIconSizeHook = (id) => {
  const width = useWindowSizeHook().windowSize.innerWidth;
  const widthMobile = width < 1440 ? true : false;
  let size;
  switch (id) {
    case "logo":
      size = widthMobile ? 36 : 37;
      break;
    case "gmail":
    case "linkedin":
    case "whatsapp":
    case "github":
      size = widthMobile ? 32 : 40;
      break;
    case "arrow-top":
      size = widthMobile ? 24 : 32;
      break;
    case "puzzle":
    case "earth":
      size = widthMobile ? 22 : 26;
      break;
    case "close":
      size = widthMobile ? 25 : 30;
      break;
    default:
      size = 36;
  }
  return size;
};
