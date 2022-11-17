import React from "react";
import { TextareaAutosize } from "@mui/material";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { STATUS } from "../../constants";
import InputText from "../common/InputText";
import { useNavigate } from "react-router-dom";
import todoApis from "../../apis/todoApis";
import { STATUS_CODE } from "../../constants";

import "./styles.scss";

const FormCreate = (props) => {
  const defaultValues = {
    id: uuidv4(),
    title: "",
    author: "",
    desc: "",
    status: STATUS.NEW,
  };

  const [formValues, setFormValues] = useState(defaultValues);
  const [data, setData] = useState([]);

  const [errorDuplicate, setErrorDuplicate] = useState(false);
  const [errorValidate, setErrorValidate] = useState(false);
  const navigate = useNavigate();

  // const data = localStorage.getItem("todoList")
  //   ? JSON.parse(localStorage.getItem("todoList"))
  //   : [];

  const fetchData = async () => {
    // setIsLoadData(true);
    const response = await todoApis.getAll();
    console.log(response);

    // Check status for post api
    if (response.status === STATUS_CODE.OK) {
      setData(response.data);
    } else {
      alert("Get list failed.");
      console.log(response.status);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChangeField = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const isDuplicate = () => {
    return data.some(function (item) {
      return item.title === formValues.title;
    });
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    if (isDuplicate()) {
      setErrorDuplicate(true);
      return;
    }

    if (
      formValues.title.length == 0 ||
      formValues.author.length == 0 ||
      formValues.desc.length == 0
    ) {
      setErrorValidate(true);
      return;
    }

    // Get all values
    // data.push(formValue);

    // localStorage.setItem("todoList", JSON.stringify(data));

    // Handle save new todo to list

    const response = await todoApis.add(formValues);
    // Check status for post api
    if (response.status === STATUS_CODE.CREATED) {
      alert("Congratulations!! Added successfully.");
      navigate("/home");
    } else {
      alert("Sorry!! Please try again.");
      console.log(response.status);
    }

    // reset form values
    setFormValues(defaultValues);
  };

  return (
    <form className="form" onSubmit={handleCreateTask}>
      <div className="form__item">
        <label htmlFor="title">Title: </label>
        <div className="form__inputArea">
          <input
            type="text"
            name="title"
            value={formValues.title}
            onChange={handleChangeField}
          />
          {errorDuplicate ? <p>Title is duplicate</p> : ""}
          {errorValidate && formValues.title.length <= 0 ? (
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
            value={formValues.author}
            onChange={handleChangeField}
          />
          {errorValidate && formValues.author.length <= 0 ? (
            <p>Author is required</p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="form__item">
        <label htmlFor="description">Description: </label>
        <div className="form__inputArea">
          <TextareaAutosize
            className="form__desc"
            aria-label="minimum height"
            minRows={3}
            name="desc"
            placeholder="Minimum 3 rows"
            style={{ width: 300 }}
            value={formValues.desc}
            onChange={handleChangeField}
          />
          {errorValidate && formValues.desc.length <= 0 ? (
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
          value={formValues.status}
          style={{ padding: 5, width: 100 }}
          label="Status"
          onChange={handleChangeField}
        >
          <option value={STATUS.NEW}>{STATUS.NEW}</option>
          <option value={STATUS.DOING}>{STATUS.DOING}</option>
          <option value={STATUS.DONE}>{STATUS.DONE}</option>
        </select>
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

FormCreate.propTypes = {};

export default FormCreate;
