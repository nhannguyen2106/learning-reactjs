import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const InputText = ({
  title,
  name,
  type,
  value,
  onChange,
  register,
  required,
  errors,
  touchedFields,
  registerOption,
}) => {
  return (
    <div className="field">
      <label className="field__label">{title}</label>
      <div className="field__inputArea">
        <input
          className="field__input"
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          {...register(name, registerOption)}
        />
        {errors[name] && errors[name].type === "required" && (
          <p>{"This is required"}</p>
        )}
        {(errors[name]?.type === "minLength" ||
          errors[name]?.type === "maxLength") && (
          <p>{"Please input from 5 to 80 characters "}</p>
        )}
        {errors[name]?.type === "beforeNow" && (
          <p>{"The date must be after the current date"}</p>
        )}
      </div>
    </div>
  );
};

InputText.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default InputText;
