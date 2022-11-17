import React from "react";
import TodoList from "../../components/TodoList";
import Pagination from "../../components/Pagination";

import "./styles.scss";
import Sidebar from "../Sidebar";

const MainContent = (props) => {
  console.log(props);
  const { status, searchValue } = props;
  return (
    <div className="main-containter">
      <TodoList status={status} searchValue={searchValue} />
      <Pagination />
    </div>
  );
};

MainContent.propTypes = {};

export default MainContent;
