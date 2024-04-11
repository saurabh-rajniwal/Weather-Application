const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const API_URLS = {
  FORECAST: (city) => `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}`,
  CURRENT_WEATER: (city) => `${BASE_URL}/weather?q=${city}&appid=${API_KEY}`,
};
