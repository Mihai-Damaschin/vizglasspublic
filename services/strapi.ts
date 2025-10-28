import qs from "qs";
import { axios } from "@/services/axios";
import { createQueryKeys } from "@lukemorales/query-key-factory";
import type { Project, Technology, WithPagination } from "./strapi.types.ts";

export const strapiApi = {
  getAllBrands: async (params: Record<string, string | string[]>) => {
    const response = await axios.get<WithPagination<Project>>(
      `/brands?${qs.stringify(params)}`,
    );

    return response.data;
  },
  getAllProducts: async (params: Record<string, string>) => {
    const response = await axios.get<WithPagination<Technology>>("/products", {
      params,
    });

    return response.data;
  },
  getAllProductCategories: async (params: Record<string, string>) => {
    const response = await axios.get<WithPagination<Technology>>(
      "/product-categories",
      { params },
    );

    return response.data;
  },
  getAllProductTypes: async (params: Record<string, string>) => {
    const response = await axios.get<WithPagination<Technology>>(
      "/product-types",
      { params },
    );

    return response.data;
  },
};

export const strapiQueries = createQueryKeys("strapiApi", {
  getAllBrands: (params) => ({
    queryKey: ["brands", params],
    queryFn: () => strapiApi.getAllBrands(params),
  }),
  getAllProducts: (params) => ({
    queryKey: ["products", params],
    queryFn: () => strapiApi.getAllProducts(params),
  }),
  getAllProductCategories: (params) => ({
    queryKey: ["product-categories", params],
    queryFn: () => strapiApi.getAllProductCategories(params),
  }),
  getAllProductTypes: (params) => ({
    queryKey: ["product-types", params],
    queryFn: () => strapiApi.getAllProductTypes(params),
  }),
});
