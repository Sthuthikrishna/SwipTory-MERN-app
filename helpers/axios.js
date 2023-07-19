import { api } from "../urlConfig";
import axiosCreate from "axios";

const token = window.localStorage.getItem(' token')

const axiosInstance = axiosCreate({
    baseURL: api,
   headers: {
        'Authorization': token ? `Bearer ${token}` : ''
    }
})

export default axiosInstance;