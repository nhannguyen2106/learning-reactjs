// add
// get
// get by query key
// update
// delete

import axiosClient from "./axiosClient";

const noteApis = {
  /**
   * Add a new note
   * @param {object} note
   */
  add: async (note) => {
    try {
      const response = await axiosClient.post("/notes", note);
      return response;
    } catch (error) {
      console.log(error);
      alert("Cannot connect to API.");
    }
    // axiosClient
    //   .post('/notes', note)
    //   .then(function (response) {
    //     return response
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  },

  //  Get a list of notes
  getAll: async () => {
    try {
      const response = await axiosClient.get("/notes");
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  getItem: async (id) => {
    try {
      const response = await axiosClient.get("/notes/" + id);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  // Update by id
  edit: async (data) => {
    try {
      const response = await axiosClient.patch("/notes/", data);
      return response;
    } catch (error) {
      console.log(error);
      alert("Cannot connect to API.");
    }
  },

  /**
   * Update a note
   * @param {object} note
   */
  update: async (note) => {
    // Require id to process further
    if (!note.id) throw new Error("Missing id in note object");

    try {
      const response = await axiosClient.patch(`/notes/${note.id}`, note);
      return response;
    } catch (error) {
      console.log(error);
      alert("Cannot connect to API.");
    }
  },

  // async remove(id) {
  //   // Remove note item in list
  //   const url = `notes/${id}/`;
  //   const response = await axiosClient.delete(url);
  //   return response;
  // },

  /**
   * Remove a note by id
   * @param {object} noteId
   */
  delete: async (noteId) => {
    try {
      const response = await axiosClient.delete(`/notes/${noteId}`);
      return response;
    } catch (error) {
      console.log(error);
      alert("Cannot connect to API.");
    }
  },
};

export default noteApis;
