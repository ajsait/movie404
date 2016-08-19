import axios from "axios";
import { BASE_URL, API_KEY } from "./config";

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY
  }
});

instance.interceptors.response.use((response) => {
  return {data: response.data};
});

export default instance;
