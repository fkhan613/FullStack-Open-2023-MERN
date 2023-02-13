import axios from "axios";
const BASE_URL = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(BASE_URL).then((res) => res.data);
};

const insert = (contact) => {
  return axios.post(BASE_URL, contact).then((res) => res.data);
};

const remove = (id) => {
  return axios.delete(`${BASE_URL}/${id}`).then((res) => res.data);
};

const update = (id, name, number) => {
  return axios.put(`${BASE_URL}/${id}`, {id:id, name:name, number:number}).then((res) => res.data);
};

const methods = { getAll, insert, remove, update };

export default methods;
