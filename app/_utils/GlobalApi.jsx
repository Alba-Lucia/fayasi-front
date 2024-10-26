import axios from 'axios';

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
});

// Funciones para obtener datos
const getCategory = () => axiosClient.get("/categories?populate=*");

const getSliders = () =>
  axiosClient.get("/sliders?populate=*").then((resp) => {
    return resp.data.data;
  });
const getCategoryList = () =>
  axiosClient.get("/categories?populate=*").then((resp) => {
    return resp.data.data;
  });
const getHoworder = () =>
  axiosClient.get("/how-orders/?populate=*").then((resp) => {
    return resp.data.data;
  });
  const getGallery = () =>
    axiosClient.get("/gallerias/?populate=*").then((resp) => {
      return resp.data.data;
    });
const getAllProducts = () =>
  axiosClient.get("/productos/?populate=*").then((resp) => {
    return resp.data.data;
  });

// Exporta todas las funciones de manera correcta
export default {
  getCategory,
  getSliders,
  getCategoryList,
  getHoworder,
  getGallery,
  getAllProducts
};

