import { PAGE_LIMIT } from "@/common/constants";
import { createSelectorHooks } from "@/utils";
import { useLocation } from "react-router-dom";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { IInitialMarketStoreProps, IMarketStoreProps } from "./types";

const initialState: IInitialMarketStoreProps = {
  search: "",
  page: 1,
  limit: PAGE_LIMIT.desktop,
  category: "",
  maxPrice: 100000,
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

export const useMarketSync = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);

  useMarketStore.setState((state) => ({
    ...state,
    category: searchParams.get("category") || "",
    search: searchParams.get("search") || "",
    page: Number(searchParams.get("page") || 1),
    isInit: true,
  }));
};
