import axios from "axios";

const COUNTRY_URL = "https://restcountries.com/v2";
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?";
const WEATHER_ICON_URL = "http://openweathermap.org/img/wn/";

const getAll = () => {
  return axios.get(`${COUNTRY_URL}/all`).then((res) => {
    return res.data;
  });
};

const search = (name) => {
  return axios.get(`${COUNTRY_URL}/name/${name}`).then((res) => {
    return res.data;
  });
};

const getWeather = (lat, lon) => {
  return axios
    .get(
      `${WEATHER_URL}lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_API_KEY
      }`
    )
    .then((res) => {
      return res.data;
    });
};
const getWeatherIcon = (code) => {
  return axios.get(`${WEATHER_ICON_URL}/${code}@2x.png`).then((res) => {
    return res.data;
  });
};

export default { getAll, search, getWeather, getWeatherIcon};
