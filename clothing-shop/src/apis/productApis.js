// add
// get
// get by query key
// update
// delete

import axios from "axios";
import { STATUS_CODE } from "../constants";
import axiosClient from "./axiosClient";

const productApis = {
  /**
   * Add a new product
   * @param {object} product
   */
  add: async (product) => {
    try {
      const response = await axiosClient.post("/products", product);
      return response;
    } catch (error) {
      console.log(error);
      alert("Cannot connect to API.");
    }
    // axiosClient
    //   .post('/products', product)
    //   .then(function (response) {
    //     return response
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  },

  //  Get a list of products
  getAll: async () => {
    try {
      const response = await axiosClient.get("/products");
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  getItem: async (id) => {
    try {
      const response = await axiosClient.get("/products/" + id);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  // Update by id
  edit: async (data) => {
    try {
      const response = await axiosClient.patch("/products/", data);
      return response;
    } catch (error) {
      console.log(error);
      alert("Cannot connect to API.");
    }
  },

  /**
   * Update a product
   * @param {object} product
   */
  update: async (product) => {
    // Require id to process further
    if (!product.id) throw new Error("Missing id in product object");

    try {
      const response = await axiosClient.patch(
        `/products/${product.id}`,
        product
      );
      return response;
    } catch (error) {
      console.log(error);
      alert("Cannot connect to API.");
    }
  },

  // async remove(id) {
  //   // Remove product item in list
  //   const url = `products/${id}/`;
  //   const response = await axiosClient.delete(url);
  //   return response;
  // },

  /**
   * Remove a product by id
   * @param {object} productId
   */
  delete: async (productId) => {
    try {
      const response = await axiosClient.delete(`/products/${productId}`);
      return response;
    } catch (error) {
      console.log(error);
      alert("Cannot connect to API.");
    }
  },
};

export default productApis;
