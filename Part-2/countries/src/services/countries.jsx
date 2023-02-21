import axios from "axios";

const BASE_URL = "https://restcountries.com/v2";

const getAll = () => {
  return axios.get(`${BASE_URL}/all`).then((res) => {
    return res.data;
  });
};

const search = (name) => {
  return axios.get(`${BASE_URL}/name/${name}`).then((res) => {
    return res.data;
  });
};

export default { getAll, search };
