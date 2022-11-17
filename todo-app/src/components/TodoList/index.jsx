import React, { useEffect, useState } from "react";

import TodoItem from "../TodoItem";
import todoApis from "../../apis/todoApis";
import { STATUS_CODE } from "../../constants";

import "./styles.scss";

const TodoList = (props) => {
  // const data = localStorage.getItem("todoList")
  //   ? JSON.parse(localStorage.getItem("todoList"))
  //   : [];

  const [todoList, setTodoList] = useState([]);
  const [isLoadData, setIsLoadData] = useState(true);

  const fetchData = async () => {
    setIsLoadData(true);
    const response = await todoApis.getAll();

    // Check status for post api
    if (response.status === STATUS_CODE.OK) {
      setTodoList(response.data);
    } else {
      alert("Get list failed.");
      console.log(response.status);
    }
  };

  const newTodoList = [
    ...todoList.filter(
      (item) =>
        item.title.includes(props.searchValue) ||
        item.author.includes(props.searchValue) ||
        item.desc.includes(props.searchValue) ||
        item.status.includes(props.searchValue)
    ),
  ];
  const handleChange = async (idx, newStatus) => {
    // Update status for item by index
    // newTodoList[idx] = {
    //   ...todoList[idx],
    //   status: newStatus,
    // };

    const updatedTodoStatus = {
      ...todoList[idx],
      status: newStatus,
    };

    const respone = await todoApis.update(updatedTodoStatus);

    if (respone.status === STATUS_CODE.OK) {
      setIsLoadData(false);
    } else {
      alert("Sorry!! Please try again.");
    }

    console.log(respone);
  };

  useEffect(() => {
    fetchData();
  }, [isLoadData]);

  const handleDelete = async (id) => {
    // newTodoList.splice(id, 1);
    // setTodoList(newTodoList);
    // localStorage.setItem("todoList", JSON.stringify(newTodoList));
    const response = await todoApis.delete(id);
    // Check status for post api
    if (response.status === STATUS_CODE.OK) {
      alert("Congratulations!! Deleted successfully.");
      setIsLoadData(false);
    } else {
      alert("Sorry!! Please try again.");
      console.log(response.status);
    }
  };

  return (
    <div className="todos">
      {!props.status
        ? newTodoList.map((item, index) => (
            <TodoItem
              todo={item}
              idx={index}
              id={item.id}
              onHandleChange={handleChange}
              onHandleDelete={handleDelete}
            />
          ))
        : newTodoList
            .filter((todo) => todo.status === props.status)
            .map((item, index) => (
              <TodoItem
                todo={item}
                idx={index}
                id={item.id}
                onHandleChange={handleChange}
                onHandleDelete={handleDelete}
              />
            ))}
    </div>
  );
};

TodoList.propTypes = {};

export default TodoList;
