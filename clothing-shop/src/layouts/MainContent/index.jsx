import React from "react";
import PropTypes from "prop-types";
import FormCreate from "../../components/FormCreate";
import ProductsList from "../../components/ProductsList";

const MainContent = (props) => {
  return (
    <div>
      <ProductsList />
    </div>
  );
};

MainContent.propTypes = {};

export default MainContent;
