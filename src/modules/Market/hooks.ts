import { PAGE_LIMIT } from "@/common/constants";
import {
  useIsDesktop,
  useIsMobile,
  useIsSmallMobile,
  useIsTablet,
} from "@/common/hooks";
import { useEffect } from "react";

export const useSetLimitPerPage = (cb: (limit: number) => void) => {
  const IsDesktop = useIsDesktop();
  const IsMobile = useIsMobile();
  const IsTablet = useIsTablet();
  const IsSmallMobile = useIsSmallMobile();

  const handlerCheckSize = () => {
    if (IsDesktop) {
      return PAGE_LIMIT.desktop;
    }
    if (IsTablet) {
      return PAGE_LIMIT.littleDesktop;
    }
    if (IsMobile) {
      return PAGE_LIMIT.tablet;
    }
    if (IsSmallMobile) {
      return PAGE_LIMIT.mobile;
    }
    return PAGE_LIMIT.littleMobile;
  };

  useEffect(() => {
    cb(handlerCheckSize());
  }, [IsDesktop, IsMobile, IsTablet, IsSmallMobile]);
};
