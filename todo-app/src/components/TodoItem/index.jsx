import React, { useState } from "react";
import { STATUS } from "../../constants";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./styles.scss";

const TodoItem = (props) => {
  const { title, author, status, desc } = props.todo;
  const { idx, id, onHandleChange, onHandleDelete } = props;

  const handleChangeStatus = (e) => {
    onHandleChange(idx, e.target.value);
  };

  const handleDeleteItem = async (e) => {
    onHandleDelete(id);
  };

  const navigate = useNavigate();

  const handleNavigateUpdate = (e) => {
    navigate("/update/" + id);
  };

  return (
    <div className="card">
      <div className="card__container">
        <p className="card__title">
          <label>Title: </label>
          <label>{title}</label>
        </p>
        <p className="card__creator">
          <label>Creator: </label>
          <label>{author}</label>
        </p>
        <p className="card__status">
          <label className={status}>Status: </label>
          <label className={status}>{status}</label>
        </p>
        <hr className="card__lineBreak" />

        <p className="card__description">
          <label>Description: </label>
          <p>{desc}</p>
        </p>
        <select className="card__selectStatus" onChange={handleChangeStatus}>
          <option value={STATUS.NEW}>{STATUS.NEW}</option>
          <option value={STATUS.DOING}>{STATUS.DOING}</option>
          <option value={STATUS.DONE}>{STATUS.DONE}</option>
          <FaChevronDown className="arrow-icon" />
        </select>
        <div className="card__buttonArea">
          <button type="button" onClick={handleNavigateUpdate}>
            Update
          </button>
          <button type="button" onClick={handleDeleteItem}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

TodoItem.propTypes = {};

export default TodoItem;
