import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../utils/requestMethods";
import { Dispatch } from "redux";
import {
  getProductFailure,
  getProductSuccess,
  getProductStart,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} from "./productRedux";
import {
  getUserFailure,
  getUserStart,
  getUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  userAddFailure,
  userAddStart,
  userAddSuccess,
} from "./usersRedux";
import { Product, Users } from "./types";

export const login = async (dispatch: Dispatch, user: any) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch: Dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id: string, dispatch: Dispatch) => {
  dispatch(deleteProductStart());
  try {
    await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (
  id: string,
  product: Product,
  dispatch: Dispatch
) => {
  dispatch(updateProductStart());
  try {
    await userRequest.put(`products/edit/${id}`, product);
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

export const addProduct = async (product: Product, dispatch: Dispatch) => {
  dispatch(addProductStart());
  // console.log(product);
  try {
    const res = await userRequest.post(`/products`, product); //caso ocorra um erro aq ao criar prod lembre-se q o title tem q ter no minimo 4 letras
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

export const getUser = async (dispatch: Dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await userRequest.get("/users/all");
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    dispatch(getUserFailure());
  }
};

export const deleteUser = async (id: string, dispatch: Dispatch) => {
  dispatch(deleteUserStart());
  try {
    await userRequest.delete(`/users/${id}`);
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};

export const addUser = async (user: Users, dispatch: Dispatch) => {
  dispatch(userAddStart());
  try {
    const res = await userRequest.post(`/users/store`, user);
    dispatch(userAddSuccess(res.data));
  } catch (err) {
    dispatch(userAddFailure());
  }
};
