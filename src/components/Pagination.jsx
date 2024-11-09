import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import {
  Pagination as PaginationRoot,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const Pagination = ({ pagination }) => {
  const [pages, setPages] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const { offset, limit, total } = pagination;
  const pagesCount = Math.ceil(total / limit);
  const range = 5;

  const handlePrevPage = () => {
    if (offset > 0) {
      setSearchParams((state) => {
        state.set("offset", offset - 1);
        return state;
      });
    }
  };

  const handleNextPage = () => {
    if (offset < pagesCount) {
      setSearchParams((state) => {
        state.set("offset", offset + 1);
        return state;
      });
    }
  };

  const handlePage = (page) => {
    setSearchParams((state) => {
      state.set("offset", page);
      return state;
    });
  };

  useEffect(() => {
    const startPage = Math.max(offset + 1, 1);
    const endPage = Math.min(offset + 1 + range, pagesCount);

    setPages(
      Array.from({ length: endPage - startPage }, (_, i) => startPage + i)
    );
  }, [offset, limit]);

  return (
    <PaginationRoot className="w-full flex items-center justify-center h-16">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={handlePrevPage}
            disabled={offset + 1 <= 1}
          />
        </PaginationItem>
        {pages[0] > 1 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {pages.map((page, index) =>
          page === offset + 1 ? (
            <PaginationItem key={index}>
              <PaginationLink isActive>{page}</PaginationLink>
            </PaginationItem>
          ) : (
            <PaginationItem key={index} className="cursor-pointer">
              <PaginationLink onClick={() => handlePage(page)}>
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        )}
        {pages[pages.length - 1] < pagesCount && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext
            onClick={handleNextPage}
            disabled={pagesCount >= offset + 1}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationRoot>
  );
};
