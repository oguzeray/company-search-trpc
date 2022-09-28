import useDebounce from "../hooks/useDebounce";
import { ChangeEvent, useState } from "react";
import SearchBarUI from "../ui-elements/searchBar";

interface SearchBarProps {
  onSearch: (searchText: string) => void;
  debounceInMs?: Parameters<typeof useDebounce>["1"];
}

const SearchBar = ({ onSearch, debounceInMs = 500 }: SearchBarProps) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  useDebounce(
    () => {
      onSearch(searchText);
    },
    debounceInMs,
    [searchText]
  );

  return <SearchBarUI value={searchText} onChange={handleChange} />;
};

export default SearchBar;
