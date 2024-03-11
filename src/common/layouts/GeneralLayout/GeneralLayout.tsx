import { useGeneralStore } from "@/common/store";
import { FC, useEffect } from "react";
import { Main } from "./styles";
import { IGeneralLayoutProps } from "./types";

const GeneralLayout: FC<IGeneralLayoutProps> = ({ font, children }) => {
  useEffect(() => {
    useGeneralStore.persist.rehydrate();
  }, []);

  return <Main className={font}>{children}</Main>;
};

export default GeneralLayout;
