import axios from "axios";

const API_LOCAL = import.meta.env.VITE_LOCAL_API;

const api = axios.create({
    baseURL: `${API_LOCAL}`,
    headers: {
        Authorization: `Bearer ${localStorage.getItem("tken")}`
    }
});

export default api;