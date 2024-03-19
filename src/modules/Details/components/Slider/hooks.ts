import { useMediaQuery } from "react-responsive";

export const useAspectRation = () => {
  const isLittleDesktop = useMediaQuery({ maxWidth: 1280 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isLittleMobile = useMediaQuery({ maxWidth: 540 });
  const isVeryLittleMobile = useMediaQuery({ maxWidth: 400 });

  if (isVeryLittleMobile) {
    return "3:4";
  }
  if (isLittleMobile) {
    return "95:100";
  }
  if (isMobile) {
    return "7:4";
  }
  if (isTablet) {
    return "17:24";
  }
  if (isLittleDesktop) {
    return "24:25";
  }
  return "6:5";
};
