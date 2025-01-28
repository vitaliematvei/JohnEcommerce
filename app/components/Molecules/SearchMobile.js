import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  const [active, setActive] = useState(null);
  const handleItemClick = () => {
    setActive(!active);
  };

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
    <form className="flex xl:hidden" onSubmit={handleSubmit}>
      <div
        className={`absolute left-0 mt-8 h-20  w-full flex justify-around bg-[#37464A] shadow-md z-10 ${
          active ? "block" : "hidden"
        }`}
      >
        <div className="w-11/12 pt-5">
          <button
            type="submit"
            className="border-b w-full flex justify-between items-center"
          >
            <input
              type="text"
              placeholder="Recherche"
              className="bg-transparent text-white focus:outline-none tracking-widest text-xl "
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <IoIosSearch color="white" size={20} />
          </button>
        </div>
      </div>

      <IoIosSearch color="white" size={20} onClick={handleItemClick} />
    </form>
  );
};

export default Search;
