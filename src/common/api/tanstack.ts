import { QueryClient, useQuery } from "@tanstack/react-query";
import { axiosNovaInstance } from ".";
import { QueryKey } from "../enums";
import { IAreaModel, ICityModel, IWarehouse } from "../types";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

export const useGetAreasQuery = () => {
  return useQuery<IAreaModel[]>({
    staleTime: 60000,
    refetchOnMount: false,
    queryKey: [QueryKey.AREAS],
    queryFn: async () => {
      const response = await axiosNovaInstance.post("/", {
        apiKey: process.env.REACT_APP_NOVA_POSHTA_API,
        modelName: "Address",
        calledMethod: "getAreas",
        methodProperties: {},
      });

      if (response.status === 200) {
        const data = response.data;
        if (data.success) {
          const cities = data.data;
          return cities;
        } else {
          console.error("Error:", data.errors);
          return [];
        }
      } else {
        console.error("Request failed with status code:", response.status);
        return [];
      }
    },
  });
};

export const useGetCitiesByAreaQuery = (enabled: boolean, refArea: string) => {
  return useQuery<ICityModel[]>({
    enabled,
    staleTime: 60000,
    refetchOnMount: false,
    queryKey: [QueryKey.REGIONS, refArea],
    queryFn: async () => {
      const response = await axiosNovaInstance.post("/", {
        apiKey: process.env.REACT_APP_NOVA_POSHTA_API,
        modelName: "Address",
        calledMethod: "getCities",
        methodProperties: {
          AreaRef: refArea,
        },
      });

      if (response.status === 200) {
        const data = response.data;
        if (data.success) {
          const cities = data.data;
          return cities;
        } else {
          console.error("Error:", data.errors);
          return [];
        }
      } else {
        console.error("Request failed with status code:", response.status);
        return [];
      }
    },
  });
};

export const useGetWarehousesByCityQuery = (
  enabled: boolean,
  refCity: string
) => {
  return useQuery<IWarehouse[]>({
    enabled,
    staleTime: 60000,
    refetchOnMount: false,
    queryKey: [QueryKey.CITY, refCity],
    queryFn: async () => {
      const response = await axiosNovaInstance.post("/", {
        apiKey: process.env.REACT_APP_NOVA_POSHTA_API,
        modelName: "Address",
        calledMethod: "getWarehouses",
        methodProperties: {
          CityRef: refCity,
        },
      });

      if (response.status === 200) {
        const data = response.data;
        if (data.success) {
          const cities = data.data;
          return cities;
        } else {
          console.error("Error:", data.errors);
          return [];
        }
      } else {
        console.error("Request failed with status code:", response.status);
        return [];
      }
    },
  });
};
