import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  ChevronsLeft,
  ChevronsRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  Pagination as PaginationRoot,
  PaginationContent,
  PaginationLink,
} from "@/components/ui/pagination";

export const Pagination = ({ pagination }) => {
  const [, setSearchParams] = useSearchParams();

  const { offset, limit, total } = pagination;
  const totalPages = Math.ceil(total / limit);

  const handlePrevPage = () => {
    if (offset > 0) {
      setSearchParams((state) => {
        state.set("offset", offset - 1);
        return state;
      });
    }
  };

  const handleNextPage = () => {
    if (offset < totalPages) {
      setSearchParams((state) => {
        state.set("offset", offset + 1);
        return state;
      });
    }
  };

  const handleFirstPage = () => {
    setSearchParams((state) => {
      state.set("offset", 0);
      return state;
    });
  };

  const handleLastPage = () => {
    setSearchParams((state) => {
      state.set("offset", totalPages);
      return state;
    });
  };

  return (
    <PaginationRoot className="w-full max-w-5xl h-14 flex items-center justify-end">
      <PaginationContent>
        <span className="text-zinc-50 text-sm mr-4">
          Página {offset + 1} de {totalPages + 1}
        </span>
        <PaginationLink
          onClick={handleFirstPage}
          disabled={offset <= 0}
          className="cursor-pointer"
        >
          <span className="sr-only">Primeira página</span>
          <ChevronsLeft className="text-zinc-50" />
        </PaginationLink>
        <PaginationLink
          onClick={handlePrevPage}
          disabled={offset <= 0}
          className="cursor-pointer"
        >
          <span className="sr-only">Página anterior</span>
          <ChevronLeft className="text-zinc-50" />
        </PaginationLink>
        <PaginationLink
          onClick={handleNextPage}
          disabled={offset >= totalPages}
          className="cursor-pointer"
        >
          <span className="sr-only">Proxima página</span>
          <ChevronRight className="text-zinc-50" />
        </PaginationLink>
        <PaginationLink
          onClick={handleLastPage}
          disabled={offset >= totalPages}
          className="cursor-pointer"
        >
          <span className="sr-only">Última página</span>
          <ChevronsRight className="text-zinc-50" />
        </PaginationLink>
      </PaginationContent>
    </PaginationRoot>
  );
};
