import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../FormCreate/styles.scss";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import todoApis from "../../apis/todoApis";
import { STATUS, STATUS_CODE } from "../../constants";

const FormUpdate = (props) => {
  // const data = localStorage.getItem("todoList")
  //   ? JSON.parse(localStorage.getItem("todoList"))
  //   : [];

  const { itemId } = useParams();
  const todo = [];

  const [errorUpdateValidate, setErrorUpdateValidate] = useState(false);
  const [formUpdate, setFormUpdate] = useState({
    id: "",
    title: "",
    author: "",
    desc: "",
    status: "",
  });

  const navigate = useNavigate();

  const handleChangeUpdateField = (e) => {
    setFormUpdate({
      ...formUpdate,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateTask = async (e) => {
    e.preventDefault();

    if (
      formUpdate.title.length == 0 ||
      formUpdate.author.length == 0 ||
      formUpdate.desc.length == 0
    ) {
      setErrorUpdateValidate(true);
      return;
    }

    // data[itemId] = formUpdate;

    // localStorage.setItem("todoList", JSON.stringify(data));
    // navigate("/home");

    // Handle edit todo
    if (formUpdate === todo) {
      alert("Please change before updating!");
    } else {
      const response = await todoApis.update(formUpdate);

      // Check status for post api
      if (response.status === STATUS_CODE.OK) {
        alert("Congratulations!! Updated successfully.");
        // Go back todo list
        navigate("/home");
      } else {
        alert("Sorry!! Please try again.");
        console.log(response.status);
      }
    }
  };

  const getItemData = async (itemId) => {
    const response = await todoApis.getItem(itemId);
    setFormUpdate(response.data);
  };

  useEffect(() => {
    getItemData(itemId);
  }, []);

  return (
    <form className="form" onSubmit={handleUpdateTask}>
      <div className="form__item">
        <label htmlFor="title">Title: </label>
        <div className="form__inputArea">
          <input
            type="text"
            name="title"
            value={formUpdate.title}
            onChange={handleChangeUpdateField}
          />
          {errorUpdateValidate && formUpdate.title.length <= 0 ? (
            <p>Title is required</p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="form__item">
        <label htmlFor="author">Author: </label>
        <div className="form__inputArea">
          <input
            type="text"
            name="author"
            value={formUpdate.author}
            onChange={handleChangeUpdateField}
          />
          {errorUpdateValidate && formUpdate.author.length <= 0 ? (
            <p>Author is required</p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="form__item">
        <label htmlFor="description">Description: </label>
        <div className="form__inputArea">
          <textarea
            className="form__desc"
            aria-label="minimum height"
            minRows={3}
            name="desc"
            placeholder="Minimum 3 rows"
            style={{ width: 300 }}
            value={formUpdate.desc}
            onChange={handleChangeUpdateField}
          />
          {errorUpdateValidate && formUpdate.desc.length <= 0 ? (
            <p>Description is required</p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="form__item">
        <label htmlFor="status">Status: </label>
        <select
          className="form__select"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="status"
          value={formUpdate.status}
          style={{ padding: 5, width: 100 }}
          label="Status"
          onChange={handleChangeUpdateField}
        >
          <option value={STATUS.NEW}>{STATUS.NEW}</option>
          <option value={STATUS.DOING}>{STATUS.DOING}</option>
          <option value={STATUS.DONE}>{STATUS.DONE}</option>
        </select>
      </div>
      <button type="submit">Update</button>
    </form>
  );
};

FormUpdate.propTypes = {};

export default FormUpdate;
