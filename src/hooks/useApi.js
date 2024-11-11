import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import useAxios from "./useAxios";

const apiService = {
  get: async ({ offset, limit, product }) => {
    const { data } = await useAxios.get("/searc", {
      params: {
        limit,
        offset: offset,
        q: product,
      },
    });

    return data;
  },
};

const apiSlice = {
  get: () => {
    const [searchParams] = useSearchParams();

    const limit = searchParams.get("limit");
    const offset = searchParams.get("offset");
    const product = searchParams.get("product");

    const query = useQuery({
      queryFn: () => apiService.get({ offset, limit, product }),
      queryKey: ["products", offset, limit, product],
    });

    return query;
  },
};

export default apiSlice;
