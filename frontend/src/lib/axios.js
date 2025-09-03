import axios from "axios"

const api = axios.create({
    baseURL: "https://notepad-backend-hehh.onrender.com/api"
});

export default api
