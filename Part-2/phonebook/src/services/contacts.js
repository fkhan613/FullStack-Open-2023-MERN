import axios from "axios";
const BASE_URL = "http://localhost:3001/persons";

const getAll = () => {
  return axios
    .get(BASE_URL)
    .then((res) => res.data)
};

const insert = (contact) => {
  return axios
    .post(BASE_URL, contact)
    .then((res) => res.data)
};

export default { getAll, insert };