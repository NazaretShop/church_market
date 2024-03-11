import { create } from "zustand";

import { immer } from "zustand/middleware/immer";
import { createSelectorHooks } from "../../../utils/create-selector";
import { IAddressStoreInitProps, IAddressStoreProps } from "./types";

const initialState: IAddressStoreInitProps = {
  areas: [],
};

export const useAddressStore = createSelectorHooks(
  create<IAddressStoreProps>()(
    immer((set) => ({
      ...initialState,
    }))
  )
);

export const useAddressSync = (prams: IAddressStoreInitProps) => {
  useAddressStore.setState((state) => {
    return { ...state, ...prams };
  });
};
