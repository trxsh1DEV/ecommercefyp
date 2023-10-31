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
  getProductDetailsStart,
  getProductDetailsSuccess,
  getProductDetailsFailure,
} from "./productRedux";
import { Product } from "./types";

export const login = async (dispatch: Dispatch, user: any) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/tokens", user);
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

export const getProductDetails = async (id: string, dispatch: Dispatch) => {
  dispatch(getProductDetailsStart());

  try {
    const response = await userRequest.get(`/products/${id}`);
    dispatch(getProductDetailsSuccess(response.data));
  } catch (err) {
    console.error(
      "Erro na chamada à API de busca de detalhes do produto:",
      err
    );
    dispatch(getProductDetailsFailure());
  }
};

export const deleteProduct = async (id: string, dispatch: Dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(res.data));
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
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};
