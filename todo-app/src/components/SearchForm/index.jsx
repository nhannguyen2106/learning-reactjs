import React, { useState, useEffect } from "react";
import Button from "../common/Button";
import InputText from "../common/InputText";

const SearchForm = ({ setSearchValue }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchBtnPressed, setSearchBtnPressed] = useState();
  const handleSearch = () => {
    setSearchBtnPressed(!searchBtnPressed);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode == 13) {
      handleSearch();
    }
  };

  useEffect(() => {
    setSearchValue(searchInput);
  }, [searchBtnPressed]);

  return (
    <div>
      <InputText
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
        inputPlaceholder={"Type something to search"}
      />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
};

SearchForm.propTypes = {};

export default SearchForm;
