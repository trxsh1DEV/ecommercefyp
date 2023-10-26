import axios from "axios";

export const BASE_URL = "http://localhost:5123/api";
const TOKEN = JSON.parse(localStorage.getItem("persist:root"))?.user;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
