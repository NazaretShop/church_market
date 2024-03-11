import { useMediaQuery } from "react-responsive";

export const useIsDesktop = () => useMediaQuery({ minWidth: 1280 });
export const useIsTablet = () => useMediaQuery({ minWidth: 1024 });
export const useIsMobile = () => useMediaQuery({ minWidth: 640 });
export const useIsSmallMobile = () => useMediaQuery({ minWidth: 340 });
