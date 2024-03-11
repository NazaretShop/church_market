import { IInitialMarketStoreProps } from "./store/types";
import { IGoods } from "./types";

export const filterGoods = (
  filters: Pick<
    IInitialMarketStoreProps,
    "category" | "search" | "maxPrice" | "minPrice"
  >,
  goods: IGoods[]
): IGoods[] => {
  const { category, search, maxPrice, minPrice } = filters;
  return goods.filter((product) => {
    // filter by query
    if (
      search &&
      !product.product.title.toLowerCase().includes(search.toLowerCase())
    ) {
      return false;
    }

    // filter by categories
    if (category && category !== product.product.category) {
      return false;
    }

    // filter by price
    if (
      maxPrice &&
      minPrice &&
      (+product.product.price > maxPrice || +product.product.price < minPrice)
    ) {
      return false;
    }

    return true;
  });
};
