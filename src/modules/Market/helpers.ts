import { IProductModelSecond } from "@/common/types";
import { IInitialMarketStoreProps } from "./store/types";

export const filterGoods = (
  filters: Pick<
    IInitialMarketStoreProps,
    "category" | "search" | "maxPrice" | "minPrice"
  >,
  goods: IProductModelSecond[]
): IProductModelSecond[] => {
  const { category, search, maxPrice, minPrice } = filters;
  return goods.filter((product) => {
    // filter by query
    if (
      search &&
      !product.product_name.toLowerCase().includes(search.toLowerCase())
    ) {
      return false;
    }

    // filter by categories
    if (category && category !== product.product_category) {
      return false;
    }

    // filter by price
    if (
      +product.product_price > maxPrice ||
      +product.product_price < minPrice
    ) {
      return false;
    }

    return true;
  });
};
