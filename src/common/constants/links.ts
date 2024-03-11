export const LINK_TEMPLATES = {
  PRODUCTS: ({ page = 1, category = "", search = "" }) => {
    return `/products?page=${page}&category=${category}&search=${search}`;
  },
  HOME: () => "/",
  PRODUCT_DETAILS: ({ id = "" }) => `/products/${id}`,
  ORDERS: () => `/orders`,
};
