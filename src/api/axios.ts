import axios from "axios";
const url = "https://api.jolpi.ca/ergast/f1/";

const instance = axios.create({
  baseURL: url,
});

export default instance;
