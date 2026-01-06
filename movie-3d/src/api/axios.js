import axios from "axios";

const api = axios.create({
  baseURL:"http://localhost:4000/api",
//    import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
});

export default api;
