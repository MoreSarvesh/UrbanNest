const SearchBar = ({
  onSearchTextChange,
  searchText,
}: {
  onSearchTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchText: string;
}) => {
  return (
    <input
      type="text"
      name="searchbar"
      id="searchbar"
      placeholder="Search property by Title"
      className="border-2 border-black rounded px-4 py-2 w-[70%] "
      onChange={onSearchTextChange}
      value={searchText}
    />
  );
};

export default SearchBar;
