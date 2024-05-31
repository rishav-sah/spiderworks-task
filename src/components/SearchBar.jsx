import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="default-search"
        className="sr-only mb-2 text-sm font-medium"
      ></label>
      <div className="relative">
        <input
          type="search"
          id="default-search"
          className="block w-full rounded-full border border-black p-4 pl-5 text-sm text-black placeholder-black outline-none"
          placeholder="Search Topics"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          type="submit"
          className="absolute bottom-2.5 right-2.5 rounded-full bg-black p-2 text-white"
        >
          <MagnifyingGlassIcon className="size-4" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
