import { create } from "zustand";

import { createSelectorHooks } from "@/utils";

import { immer } from "zustand/middleware/immer";
import { ILayoutStoreInitProps, ILayoutStoreProps } from "./types";

const initialState: ILayoutStoreInitProps = {
  isDarken: false,
};

export const useLayoutStore = createSelectorHooks(
  create<ILayoutStoreProps>()(
    immer((set) => ({
      ...initialState,
      onChangeTheme: (isDarken) =>
        set((state) => {
          state.isDarken = isDarken;
        }),
    }))
  )
);

export const useLayoutSync = (isDarken: boolean) => {
  useLayoutStore.setState((state: ILayoutStoreInitProps) => {
    return { ...state, isDarken };
  });
};
