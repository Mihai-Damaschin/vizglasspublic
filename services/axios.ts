import $axios from "axios";

export const axios = $axios.create();

axios.defaults.baseURL = process.env.NEXT_PUBLIC_STRAPI_URL + "/api/";
axios.defaults.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_STRAPI_READ_TOKEN}`;
