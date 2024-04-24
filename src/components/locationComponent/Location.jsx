import { useState } from "react";
import "./Location.css";

function Location({ handleClick }) {
  const [searchValue, setSearchValue] = useState("");

  const searchCity = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    if (searchValue.trim() !== "") {
      handleClick(searchValue);
      setSearchValue("");
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="searchContainer">
      <div className="searchContainer__locationSearchox">
        <input
          type="text"
          value={searchValue}
          onChange={searchCity}
          className="searchContainer__locationSearchox--searchBox"
          placeholder="Search location"
          onKeyUp={handleKeyPress}
        />
        <button
          onClick={handleSearch}
          className="searchContainer__locationSearchox--searchButton"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Location;
