import { create } from "zustand";

import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { IGeneralStoreInitProps, IGeneralStoreProps } from "./types";

const initialState: IGeneralStoreInitProps = {
  basket: [],
};

export const useGeneralStore = create<IGeneralStoreProps>()(
  persist(
    immer((set) => ({
      ...initialState,
      addBasket: (basket) =>
        set((state) => {
          state.basket.push(basket);
        }),

      removeBasket: (id) =>
        set((state) => {
          state.basket = state.basket.filter((b) => b.id !== id);
        }),
      updateCount: (id, counter) =>
        set((state) => {
          const elementIndex = state.basket.findIndex((obj) => obj.id === id);
          if (elementIndex !== -1) {
            if (
              state.basket[elementIndex].count <=
              +process.env.REACT_APP_MAX_PRODUCT_COUNT!
            ) {
              state.basket[elementIndex].count = counter;
              state.basket[elementIndex].total =
                counter * +state.basket[elementIndex].price;
            }
          }
        }),
      resetBasket: () =>
        set((state) => {
          state.basket = [];
        }),
    })),
    {
      name: "basket-nazaret-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
