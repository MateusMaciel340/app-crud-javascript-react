import axios from "axios";

const API_LOCAL = import.meta.env.VITE_LOCAL_API;
const token = localStorage.getItem("token");

const api = axios.create({
    baseURL: API_LOCAL,
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export default api;