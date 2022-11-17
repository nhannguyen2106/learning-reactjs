import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Button = ({ children, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {};

export default Button;
