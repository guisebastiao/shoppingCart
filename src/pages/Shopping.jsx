import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import apiSlice from "@/hooks/useApi";

import { Nav } from "@/components/Nav";
import { Product } from "@/components/Product";
import { Pagination } from "@/components/Pagination";
import { Skeleton } from "@/components/ui/skeleton";

export const Shopping = () => {
  const { data, isLoading, isError, error } = apiSlice.get();
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({
      limit: 50,
      offset: 0,
      product: "celular",
    });
  }, []);

  return (
    <main className="w-full min-h-screen flex items-center justify-end flex-col bg-zinc-950 px-8">
      <Nav />
      <section className="max-w-5xl min-h-screen w-full flex justify-center flex-wrap gap-2 pt-24">
        {isLoading ? (
          Array.from({ length: 50 }).map((_, key) => (
            <Skeleton key={key} className="w-40 h-64" />
          ))
        ) : data.results.length <= 0 ? (
          <span className="text-zinc-400 text-lg text-center">
            Nenhum produto com o nome{" "}
            <strong className="text-zinc-50">{data.query}</strong> foi
            encontrado!
          </span>
        ) : (
          data.results.map((product) => (
            <Product key={product.id} data={product} />
          ))
        )}
      </section>
      {!isLoading && data.results.length > 0 && (
        <Pagination pagination={data.paging} />
      )}
    </main>
  );
};
