import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Button = ({ title, type, onClick }) => {
  return (
    <button className="btn" type={type} onClick={onClick}>
      {title}
    </button>
  );
};

Button.propTypes = {};

export default Button;
