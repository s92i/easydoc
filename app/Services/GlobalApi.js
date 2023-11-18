import axios from "axios";
import { STRAPI_API_KEY } from "@env";

const AxiosInstance = axios.create({
  baseURL: "http://192.168.1.4:1337/api",
  headers: {
    Authorization: "Bearer " + STRAPI_API_KEY,
  },
});

const getSlider = () => AxiosInstance.get("/sliders?populate=*");
const getCategories = () => AxiosInstance.get("/categories?populate=*");

export default { getSlider, getCategories };
