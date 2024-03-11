import { PAGE_LIMIT } from "@/common/constants";
import { createSelectorHooks } from "@/utils";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { IInitialMarketStoreProps, IMarketStoreProps } from "./types";

const initialState: IInitialMarketStoreProps = {
  search: "",
  page: 1,
  limit: PAGE_LIMIT.desktop,
  category: "",
  maxPrice: 10000,
  minPrice: 0,
  isInit: false,
};

export const useMarketStore = createSelectorHooks(
  create<IMarketStoreProps>()(
    devtools(
      immer((set) => ({
        ...initialState,
        onChangeFilterFieldHandler: (value, name) => {
          set((state) => ({ ...state, [name]: value }));
        },
      }))
    )
  )
);

export const useMarketSync = (
  params: Omit<IInitialMarketStoreProps, "limit">
) => {
  useMarketStore.setState((state) => ({
    ...state,
    ...params,
  }));
};
