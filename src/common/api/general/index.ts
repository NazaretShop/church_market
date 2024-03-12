import { QueryKey } from "@/common/enums";
import { ICategoryModelSecond, IProductModelSecond } from "@/common/types";
import { useQuery } from "@tanstack/react-query";
import { axiosBaseInstance } from "../axios";

export const useGetCategoriesQuery = () => {
  return useQuery<ICategoryModelSecond[]>({
    staleTime: 60000,
    refetchOnMount: false,
    queryKey: [QueryKey.CATEGORIES],
    queryFn: async () => {
      const response = await axiosBaseInstance.get("/product_category");

      if (response.status === 200) {
        const categories = response.data;
        return categories;
      } else {
        console.error("Request failed with status code:", response.status);
        return [];
      }
    },
  });
};

export const useGetNewProductsQuery = () => {
  return useQuery<IProductModelSecond[]>({
    staleTime: 60000,
    refetchOnMount: false,
    queryKey: [QueryKey.NEW_PRODUCTS],
    queryFn: async () => {
      const response = await axiosBaseInstance.get("/product");

      if (response.status === 200) {
        const products = response.data;
        return products;
      } else {
        console.error("Request failed with status code:", response.status);
        return [];
      }
    },
  });
};

export const useGetSingleProductQuery = (id: string | undefined) => {
  return useQuery<IProductModelSecond>({
    staleTime: 60000,
    refetchOnMount: false,
    queryKey: [QueryKey.SINGLE_PRODUCT, id],
    queryFn: async () => {
      const response = await axiosBaseInstance.get(`/product/${id}`);

      if (response.status === 200) {
        const products = response.data;
        return products;
      } else {
        console.error("Request failed with status code:", response.status);
        return [];
      }
    },
  });
};
