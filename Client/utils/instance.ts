import axios from "axios";

export const instance = axios.create({
  baseURL: "",
  timeout: 10000,
});
