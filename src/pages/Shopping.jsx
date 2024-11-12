import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";

import apiSlice from "@/hooks/useApi";

import { Nav } from "@/components/Nav";
import { Product } from "@/components/Product";
import { Pagination } from "@/components/Pagination";
import { Skeleton } from "@/components/ui/skeleton";

export const Shopping = () => {
  const { data, isLoading, error } = apiSlice.get();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (error) {
      toast.error("Algo deu errado, tente novamente mais tarde.");
    }
  }, [error]);

  useEffect(() => {
    const limit = searchParams.get("limit");
    const offset = searchParams.get("offset");
    const product = searchParams.get("product");

    if (!limit && !offset && !product) {
      setSearchParams({
        limit: 50,
        offset: 0,
        product: "produtos populares",
      });
    }
  }, [searchParams]);

  return (
    <main className="w-full min-h-screen flex items-center justify-end flex-col bg-zinc-950 px-8">
      <Nav />
      <section className="max-w-5xl min-h-screen w-full flex justify-center flex-wrap gap-2 pt-24">
        {isLoading ? (
          Array.from({ length: searchParams.get("limit") }).map((_, key) => (
            <Skeleton key={key} className="w-48 h-80" />
          ))
        ) : !error && data.results.length <= 0 ? (
          <span className="text-zinc-400 text-lg text-center">
            Nenhum produto com o nome{" "}
            <strong className="text-zinc-50">{data.query}</strong> foi
            encontrado!
          </span>
        ) : !error ? (
          data.results.map((product) => (
            <Product key={product.id} data={product} />
          ))
        ) : (
          <h1 className="text-zinc-50 text-lg">
            Algo deu errado, tente novamente mais tarde.
          </h1>
        )}
      </section>
      {!error && !isLoading && data.results.length > 0 && (
        <Pagination pagination={data.paging} />
      )}
    </main>
  );
};
