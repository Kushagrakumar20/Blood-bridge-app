import axios from 'axios';
// console.log('Base URL:', process.env.REACT_APP_BASEURL);

const API = axios.create({ baseURL: import.meta.env.VITE_BASEURL });

API.interceptors.request.use((req) => {
    if(localStorage.getItem("token")){
        req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    }
    return req;
})


export default API;