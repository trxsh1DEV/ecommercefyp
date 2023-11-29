import axios from "axios";

// interface LocalStorageData {
//   user: {
//     currentUser: {
//       token: string;
//     };
//   };
// }

// Tente obter os dados do localStorage e realizar a análise do JSON
const localStorageData = JSON.parse(
  localStorage.getItem("persist:root") || "null"
);

export const BASE_URL = "http://localhost:5123/api/";

// Verifica se `localStorageData` não é nulo e se possui a estrutura correta
const TOKEN: string =
  localStorageData && "user" in localStorageData
    ? JSON.parse(localStorageData.user).currentUser?.token
    : "";
// console.log(localStorage.getItem("persist:root"));

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { authorization: `Bearer ${TOKEN}` },
});
