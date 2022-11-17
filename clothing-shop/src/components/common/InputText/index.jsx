import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const InputText = ({ type, name, value, onClick, onChange }) => {
  return (
    <div className="field">
      <label className="field__label">{name}</label>
      <input
        className="field__input"
        type={type}
        name={name}
        value={value}
        onClick={onClick}
        onChange={onChange}
      ></input>
    </div>
  );
};

InputText.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default InputText;
