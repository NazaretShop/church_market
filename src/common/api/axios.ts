import axios, { AxiosError } from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_NOVA_POSHTA_URL,
});

export async function getAreas() {
  try {
    const response = await axiosInstance.post("/", {
      apiKey: process.env.NEXT_PUBLIC_NOVA_POSHTA_API,
      modelName: "Address",
      calledMethod: "getAreas",
      methodProperties: {},
    });

    if (response.status === 200) {
      const data = response.data;
      if (data.success) {
        const regions = data.data;
        return regions;
      } else {
        console.error("Error:", data.errors);
      }
    } else {
      console.error("Request failed with status code:", response.status);
    }
  } catch (error) {
    const errorMessage = error as AxiosError;
    console.error("Error:", errorMessage.message);
  }
}

export async function getCities() {
  try {
    const response = await axiosInstance.post("/", {
      apiKey: process.env.NEXT_PUBLIC_NOVA_POSHTA_API,
      modelName: "Address",
      calledMethod: "getCities",
      methodProperties: {},
    });

    if (response.status === 200) {
      const data = response.data;
      if (data.success) {
        const cities = data.data;
        return cities;
      } else {
        console.error("Error:", data.errors);
      }
    } else {
      console.error("Request failed with status code:", response.status);
    }
  } catch (error) {
    const errorMessage = error as AxiosError;
    console.error("Error:", errorMessage.message);
  }
}

export async function getWarehouses() {
  try {
    const response = await axiosInstance.post("/", {
      apiKey: process.env.NEXT_PUBLIC_NOVA_POSHTA_API,
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {},
    });

    if (response.status === 200) {
      const data = response.data;
      if (data.success) {
        const warehouses = data.data;
        return warehouses;
      } else {
        console.error("Error:", data.errors);
      }
    } else {
      console.error("Request failed with status code:", response.status);
    }
  } catch (error) {
    const errorMessage = error as AxiosError;
    console.error("Error:", errorMessage.message);
  }
}
