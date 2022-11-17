import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import SearchForm from "../../components/SearchForm";

import "./styles.scss";

const Header = (props) => {
  const { setSearchValue } = props;

  return (
    <header className="header">
      <Link to="/add-new">
        <Button>Create New Task</Button>
      </Link>
      <SearchForm setSearchValue={setSearchValue} />
    </header>
  );
};

Header.propTypes = {};

export default Header;
