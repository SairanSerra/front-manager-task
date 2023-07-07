import axios from "axios";

const api = axios.create({
    baseURL: 'url aqui'
})

api.interceptors.request.use((config) => {
    config.headers.Authorization = ''
    return config;
});

export default api;