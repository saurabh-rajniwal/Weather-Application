import { useState } from "react";

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
    <div className="locationContainer">
      <div className="locationSearchox">
        <input
          type="text"
          value={searchValue}
          onChange={searchCity}
          className="searchBox"
          placeholder="Search location"
          onKeyUp={handleKeyPress}
        />
        <button onClick={handleSearch} className="searchButton">
          Search
        </button>
      </div>
    </div>
  );
}

export default Location;
