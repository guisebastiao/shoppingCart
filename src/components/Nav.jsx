import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";

import { Cart } from "./Cart";

export const Nav = () => {
  const [inputActive, setInputActive] = useState(false);
  const [search, setSearch] = useState("");
  const [, setSearchParams] = useSearchParams();

  const handleSearch = (event) => {
    event.preventDefault();

    if (search.trim() === "") {
      return;
    }

    setSearchParams({
      offset: 0,
      limit: 50,
      product: search,
    });

    setSearch("");
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 flex justify-center border-b border-zinc-800 bg-zinc-950 z-50 px-8">
      <div className="max-w-5xl w-full h-full flex items-center justify-between gap-5">
        <form
          action="GET"
          onSubmit={handleSearch}
          className="max-w-[520px] w-full h-9"
        >
          <label
            htmlFor="search"
            className={`w-full h-full flex items-center px-2 gap-1 border bg-zinc-900 border-zinc-800 rounded-lg hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-200 hover:text-zinc-50 ${
              inputActive
                ? "bg-zinc-800 border-zinc-700"
                : "bg-zinc-900 border-zinc-800"
            }`}
          >
            <Search className="w-5 text-zinc-400" />
            <input
              type="text"
              id="search"
              name="search"
              value={search}
              autoComplete="off"
              placeholder="Pesquisar produto..."
              className="bg-transparent w-full placeholder:text-zinc-400 text-zinc-50 text-sm outline-none px-1"
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setInputActive(true)}
              onBlur={() => setInputActive(false)}
            />
          </label>
        </form>
        <Cart />
      </div>
    </nav>
  );
};
