import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search logic here, e.g.,
    // - Make a server request with the searchTerm
    // - Filter local data based on searchTerm
    console.log("Search term:", searchTerm);
  };
  return (
    <form
      className="flex border border-white rounded-md p-2"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Recherche"
        className="bg-transparent text-white focus:outline-none tracking-widest text-sm"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button type="submit">
        <IoIosSearch color="white" size={24} />
      </button>
    </form>
  );
};

export default Search;
