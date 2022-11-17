import React from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./styles.scss";

const Pagination = (props) => {
  return (
    <div className="pagination">
      <div className="pagination__page">{"<"}</div>
      <div className="pagination__page">1</div>
      <div className="pagination__page">2</div>
      <div className="pagination__page">3</div>
      <div className="pagination__page">{">"}</div>
    </div>
  );
};

Pagination.propTypes = {};

export default Pagination;
