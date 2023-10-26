import axios from "axios";

interface LocalStorageData {
  user: {
    currentUser: {
      token: null;
    }; // Adicione outras propriedades, se necessário
  };
}

// Tente obter os dados do localStorage e realizar a análise do JSON
const localStorageData: LocalStorageData | null = JSON.parse(
  localStorage.getItem("persist:root") || "null"
);

const BASE_URL = "http://localhost:5123/api/";

const TOKEN: string | undefined = JSON.parse(localStorageData.user).currentUser
  .token;

// console.log(localStorage.getItem("persist:root"));

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { authorization: `Bearer ${TOKEN}` },
});
