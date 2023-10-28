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
} from "./productRedux";

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

export const deleteProduct = async (id: string, dispatch: Dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(res.data));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};
