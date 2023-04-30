import axios from "axios";


import {
  FILTER_BY_CATEGORY,
  GET_CATEGORIES,
  GET_PRODUCTS,
  GET_PRODUCTS_BY_NAME,
  GET_PRODUCT_BY_ID,
  GET_USERS,
  ORDER_BY_NAME,
  ORDER_BY_PRICE,
  POST_PRODUCTS,
  POST_USERS,
  GET_REVIEWS,
  FILTER_REVIEWS,
  POST_REVIEW,
  PUT_ADMIN_USER,
  GET_USER_BY_ID,
  DELETE_ITEM_CARRITO
} from "./action-types";
import * as dotenv from 'dotenv'
dotenv.config()
/* const {URL} = process.env;
 */
 const URL = "api-mx1xp8s8p-santiaguero91.vercel.app"

export function getProducts() {
  return async function (dispatch) {
    try {
      let json = await axios.get(`${URL}/productos`);
      return dispatch({
        type: GET_PRODUCTS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getProductById(id) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`${URL}/productos/${id}`);
      return dispatch({
        type: GET_PRODUCT_BY_ID,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getUserById(id) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`${URL}/usuarios/${id}`);
      return dispatch({
        type: GET_USER_BY_ID,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export function getCategories() {
  return async function (dispatch) {
    try {
      let json = await axios.get(`${URL}/categorias`);
      return dispatch({
        type: GET_CATEGORIES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getReviews() {
  return async function (dispatch) {
    try {
      let json = await axios.get(`${URL}/reviews`);
      return dispatch({
        type: GET_REVIEWS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const createProducts = (obj) => {
  console.log(obj);
  return async function (dispatch) {
    try {
      let response = await axios.post(
        `${URL}/productos/create`,
        obj
      );
      console.log(response);
      return dispatch({
        type: POST_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
}

export function orderByPrice(payload) {
  return {
    type: ORDER_BY_PRICE,
    payload,
  };
}
export function filterProductsByCategories(payload) {
  return {
    type: FILTER_BY_CATEGORY,
    payload,
  };
}
export function filterReviewsByProduct(payload) {
  return {
    type: FILTER_REVIEWS,
    payload,
  };
}

export function getProductsbyName(name) {
  return async function (dispatch) {
    try {
      let json = await axios.get(
        `${URL}/productos/?name=${name}`
      );
      return dispatch({
        type: GET_PRODUCTS_BY_NAME,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getUsers() {
  return async function (dispatch) {
    try {
      let json = await axios.get(`${URL}/usuarios`);
      return dispatch({
        type: GET_USERS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const createReview = (obj) => {
  console.log(obj);
  return async function (dispatch) {
    try {
      let response = await axios.post(
        `${URL}/reviews/create`,
        obj
      );
      console.log(response);
      return dispatch({
        type: POST_REVIEW,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createUsers = (obj) => {
  console.log(obj);
  return async function (dispatch) {
    try {
      let response = await axios.post(
        `${URL}/usuarios/create`,
        obj
      );
      console.log(response);
      return dispatch({
        type: POST_USERS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function deleteReview(id){
  return async function() {
      try{       
      const response = await axios.delete(`${URL}/reviews/`+id)
      return response
  } catch (error){
      console.log(error);
  }
  }
} 
export function deleteItemCarrito(items){
  return ({
    type: DELETE_ITEM_CARRITO,
    payload: items,
  });
} 
export function putAdminUser(id,admin){
  return async function(dispatch){
    try {
      const response = await axios.put(`${URL}/usuarios/`+ id, admin)
      console.log(response)
      return dispatch({
        type: PUT_ADMIN_USER,
        payload: response.data
      })
    } catch (error) {
      console.log(error);
    }
  }
}
