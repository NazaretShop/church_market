import { QueryKey } from "@/common/enums";
import { ICategoryModelSecond } from "@/common/types";
import { useQuery } from "@tanstack/react-query";
import { axiosBaseInstance } from "../axios";

export const useGetCategoriesQuery = () => {
  return useQuery<ICategoryModelSecond[]>({
    staleTime: 60000,
    refetchOnMount: false,
    queryKey: [QueryKey.CATEGORIES],
    queryFn: async () => {
      const response = await axiosBaseInstance.get("/categories");
      console.log("response :", response);

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
