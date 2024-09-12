import axios from "axios";
const local = 'http://159.223.89.250:5000'
const production = ''
const api = axios.create({
    baseURL : `${local}/api`
})

export default api
