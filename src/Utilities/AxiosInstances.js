import axios from "axios";

const authAxios = axios.create({
  baseURL: "https://funphonics.ai:8443/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*"
  }
});

const elaAxios = axios.create({
  baseURL: "https://api.elasolution.com/",
  headers: {
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "X-API-KEY": "afef8c94d1094b58a3fc58e743eb9913"
  }
});

export { authAxios, elaAxios };
