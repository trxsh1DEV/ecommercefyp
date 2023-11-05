import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MmFmMWZjOGI0MWM3YTNkNjlmNjhlZCIsIm1haWwiOiJ5YWdvQGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NzkyMTQyNywiZXhwIjoxNjk4NTI2MjI3fQ.pBQC2nk7dKEjwOYm7H2LM8xOtLH84_bWm__L0oshsnc';

export const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const url = 'http://localhost:5123/api';

const user = JSON.parse(localStorage.getItem('persist:root'))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.token;

export const publicRequest = axios.create({
  baseURL: url,
});
export const userRequest = axios.create({
  baseURL: url,
  headers: { authorization: `Bearer ${TOKEN}` },
});
