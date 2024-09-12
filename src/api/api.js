import axios from "axios";

const api = axios.create({
    baseURL : 'http://159.223.89.250:5000/api'
})

export default api
