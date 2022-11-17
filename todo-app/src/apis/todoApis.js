// add
// get
// get by query key
// update
// delete

import axios from "axios";
import { STATUS_CODE } from "../constants";
import axiosClient from "./axiosClient";

const todoApis = {
  /**
   * Add a new todo
   * @param {object} todo
   */
  add: async (todo) => {
    try {
      const response = await axiosClient.post("/todos", todo);
      return response;
    } catch (error) {
      console.log(error);
      alert("Cannot connect to API.");
    }
    // axiosClient
    //   .post('/todos', todo)
    //   .then(function (response) {
    //     return response
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  },

  //  Get a list of todos
  getAll: async () => {
    try {
      const response = await axiosClient.get("/todos");
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  getItem: async (id) => {
    try {
      const response = await axiosClient.get("/todos/" + id);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  // Update by id
  edit: async (data) => {
    try {
      const response = await axiosClient.patch("/todos/", data);
      return response;
    } catch (error) {
      console.log(error);
      alert("Cannot connect to API.");
    }
  },

  /**
   * Update a todo
   * @param {object} todo
   */
  update: async (todo) => {
    // Require id to process further
    if (!todo.id) throw new Error("Missing id in todo object");

    try {
      const response = await axiosClient.patch(`/todos/${todo.id}`, todo);
      return response;
    } catch (error) {
      console.log(error);
      alert("Cannot connect to API.");
    }
  },

  // async remove(id) {
  //   // Remove todo item in list
  //   const url = `todos/${id}/`;
  //   const response = await axiosClient.delete(url);
  //   return response;
  // },

  /**
   * Remove a todo by id
   * @param {object} todoId
   */
  delete: async (todoId) => {
    try {
      const response = await axiosClient.delete(`/todos/${todoId}`);
      return response;
    } catch (error) {
      console.log(error);
      alert("Cannot connect to API.");
    }
  },
};

export default todoApis;
